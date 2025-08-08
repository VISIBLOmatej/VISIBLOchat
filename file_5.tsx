import { useState, useEffect } from 'react';
import { MessagesList } from './MessagesList';
import { MessageInput } from './MessageInput';
import { AdminPanel } from './AdminPanel';
import { getDatabase } from '../../lib/firebase';
import { Message, ChatState } from '../../types/chat';
import { useToast } from '@/hooks/use-toast';

interface ChatAreaProps {
  chatState: ChatState;
  onThreadChange: (thread: string) => void;
}

export function ChatArea({ chatState, onThreadChange }: ChatAreaProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [availableThreads, setAvailableThreads] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (!chatState.activeThread) return;

    const db = getDatabase();
    const threadRef = db.ref(`threads/${chatState.activeThread}`);

    setMessages([]);
    setIsLoading(true);

    const handleNewMessage = (snapshot: any) => {
      const messageData = snapshot.val();
      if (messageData) {
        // Check if message is older than 10 hours (36000000 ms)
        const tenHoursAgo = Date.now() - (10 * 60 * 60 * 1000);
        if (messageData.time < tenHoursAgo) {
          // Delete old message
          snapshot.ref.remove();
          return;
        }

        const message: Message = {
          id: snapshot.key,
          name: messageData.name,
          text: messageData.text,
          time: messageData.time,
          isAdmin: messageData.name === 'Matěj Podhola'
        };
        
        setMessages(prev => {
          const existing = prev.find(m => m.id === message.id);
          if (existing) return prev;
          return [...prev, message].sort((a, b) => a.time - b.time);
        });
      }
      setIsLoading(false);
    };

    threadRef.on('child_added', handleNewMessage);

    // Cleanup old messages periodically
    const cleanupInterval = setInterval(() => {
      const tenHoursAgo = Date.now() - (10 * 60 * 60 * 1000);
      threadRef.orderByChild('time').endAt(tenHoursAgo).once('value', (snapshot: any) => {
        const updates: any = {};
        snapshot.forEach((child: any) => {
          updates[child.key] = null;
        });
        if (Object.keys(updates).length > 0) {
          threadRef.update(updates);
        }
      });
    }, 60 * 60 * 1000); // Run once per hour

    return () => {
      threadRef.off('child_added', handleNewMessage);
      clearInterval(cleanupInterval);
    };
  }, [chatState.activeThread]);

  useEffect(() => {
    if (!chatState.isAdmin) return;

    const db = getDatabase();
    const threadsRef = db.ref('threads');

    const handleThreadsUpdate = (snapshot: any) => {
      const threads: string[] = [];
      snapshot.forEach((child: any) => {
        threads.push(child.key);
      });
      setAvailableThreads(threads);
      
      if (threads.length > 0 && !chatState.activeThread) {
        onThreadChange(threads[0]);
      }
    };

    threadsRef.on('value', handleThreadsUpdate);

    return () => {
      threadsRef.off('value', handleThreadsUpdate);
    };
  }, [chatState.isAdmin, chatState.activeThread, onThreadChange]);

  const handleSendMessage = async (messageText: string) => {
    if (!chatState.userName) return;

    // For non-admin users, ensure activeThread is set based on their username
    const threadName = chatState.isAdmin ? chatState.activeThread : chatState.userName.replace(/\s+/g, '_').toLowerCase();
    
    if (!threadName) return;

    try {
      const db = getDatabase();
      await db.ref(`threads/${threadName}`).push({
        name: chatState.userName,
        text: messageText,
        time: Date.now(),
      });

      toast({
        title: "Zpráva odeslána",
        description: "Vaše zpráva byla úspěšně odeslána.",
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Chyba při odesílání",
        description: "Nepodařilo se odeslat zprávu. Zkuste to znovu.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteThread = async (threadName: string) => {
    try {
      const db = getDatabase();
      await db.ref(`threads/${threadName}`).remove();
      
      toast({
        title: "Chat smazán",
        description: "Chat a celá jeho historie byly úspěšně smazány.",
      });

      // Clear current thread if it was deleted
      if (chatState.activeThread === threadName) {
        onThreadChange('');
      }
    } catch (error) {
      console.error('Error deleting thread:', error);
      toast({
        title: "Chyba při mazání",
        description: "Nepodařilo se smazat chat. Zkuste to znovu.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex-1 flex flex-col animate-fade-in">
      {chatState.isAdmin && (
        <AdminPanel 
          availableThreads={availableThreads}
          activeThread={chatState.activeThread}
          onThreadChange={onThreadChange}
          onDeleteThread={handleDeleteThread}
        />
      )}
      
      <MessagesList messages={messages} />
      
      <MessageInput 
        onSendMessage={handleSendMessage}
        disabled={!chatState.isConnected || (chatState.isAdmin && !chatState.activeThread)}
      />
    </div>
  );
}
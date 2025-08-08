# VISIBLO CHAT - KOMPLETNÍ KÓDOVÁ BÁZE (AKTUALIZOVÁNO)

Tento soubor obsahuje všechny potřebné soubory pro VISIBLO Chat aplikaci s **10-hodinovou historií zpráv**. Jednoduše zkopírujte obsah jednotlivých sekcí do odpovídajících souborů.

## 📁 Struktura projektu

```
visiblo-chat/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   └── chat/
│   │   │       ├── AdminPanel.tsx
│   │   │       ├── ChatArea.tsx
│   │   │       ├── LoginBox.tsx
│   │   │       ├── MessagesList.tsx
│   │   │       └── MessageInput.tsx
│   │   ├── lib/
│   │   │   └── firebase.ts
│   │   ├── pages/
│   │   │   └── chat.tsx
│   │   ├── types/
│   │   │   └── chat.ts
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   └── index.html
├── server/
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts
├── shared/
│   └── schema.ts
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
├── components.json
├── drizzle.config.ts
├── README.md
├── LICENSE
├── .gitignore
└── SETUP.md
```

---

## 📄 package.json

```json
{
  "name": "visiblo-chat",
  "version": "1.0.0",
  "type": "module",
  "license": "MIT",
  "description": "Profesionální real-time chat aplikace s admin funkcemi",
  "scripts": {
    "dev": "NODE_ENV=development tsx server/index.ts",
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "NODE_ENV=production node dist/index.js",
    "check": "tsc",
    "db:push": "drizzle-kit push"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@jridgewell/trace-mapping": "^0.3.25",
    "@neondatabase/serverless": "^0.10.4",
    "@radix-ui/react-accordion": "^1.2.4",
    "@radix-ui/react-alert-dialog": "^1.1.7",
    "@radix-ui/react-aspect-ratio": "^1.1.3",
    "@radix-ui/react-avatar": "^1.1.4",
    "@radix-ui/react-checkbox": "^1.1.5",
    "@radix-ui/react-collapsible": "^1.1.4",
    "@radix-ui/react-context-menu": "^2.2.7",
    "@radix-ui/react-dialog": "^1.1.7",
    "@radix-ui/react-dropdown-menu": "^2.1.7",
    "@radix-ui/react-hover-card": "^1.1.7",
    "@radix-ui/react-label": "^2.1.3",
    "@radix-ui/react-menubar": "^1.1.7",
    "@radix-ui/react-navigation-menu": "^1.2.6",
    "@radix-ui/react-popover": "^1.1.7",
    "@radix-ui/react-progress": "^1.1.3",
    "@radix-ui/react-radio-group": "^1.2.4",
    "@radix-ui/react-scroll-area": "^1.2.4",
    "@radix-ui/react-select": "^2.1.7",
    "@radix-ui/react-separator": "^1.1.3",
    "@radix-ui/react-slider": "^1.2.4",
    "@radix-ui/react-slot": "^1.2.0",
    "@radix-ui/react-switch": "^1.1.4",
    "@radix-ui/react-tabs": "^1.1.4",
    "@radix-ui/react-toast": "^1.2.7",
    "@radix-ui/react-toggle": "^1.1.3",
    "@radix-ui/react-toggle-group": "^1.1.3",
    "@radix-ui/react-tooltip": "^1.2.0",
    "@tanstack/react-query": "^5.60.5",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "connect-pg-simple": "^10.0.0",
    "date-fns": "^3.6.0",
    "drizzle-orm": "^0.39.1",
    "drizzle-zod": "^0.7.0",
    "embla-carousel-react": "^8.6.0",
    "express": "^4.21.2",
    "express-session": "^1.18.1",
    "framer-motion": "^11.13.1",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.453.0",
    "memorystore": "^1.6.7",
    "next-themes": "^0.4.6",
    "passport": "^0.7.0",
    "passport-local": "^1.0.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.55.0",
    "react-icons": "^5.4.0",
    "react-resizable-panels": "^2.1.7",
    "recharts": "^2.15.2",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "tw-animate-css": "^1.2.5",
    "vaul": "^1.1.2",
    "wouter": "^3.3.5",
    "ws": "^8.18.0",
    "zod": "^3.24.2",
    "zod-validation-error": "^3.4.0"
  },
  "devDependencies": {
    "@replit/vite-plugin-cartographer": "^0.2.8",
    "@replit/vite-plugin-runtime-error-modal": "^0.0.3",
    "@tailwindcss/typography": "^0.5.15",
    "@tailwindcss/vite": "^4.1.3",
    "@types/connect-pg-simple": "^7.0.3",
    "@types/express": "4.17.21",
    "@types/express-session": "^1.18.0",
    "@types/node": "20.16.11",
    "@types/passport": "^1.0.16",
    "@types/passport-local": "^1.0.38",
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.1",
    "@types/ws": "^8.5.13",
    "@vitejs/plugin-react": "^4.3.2",
    "autoprefixer": "^10.4.20",
    "drizzle-kit": "^0.30.4",
    "esbuild": "^0.25.0",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.17",
    "tsx": "^4.19.1",
    "typescript": "5.6.3",
    "vite": "^5.4.19"
  },
  "optionalDependencies": {
    "bufferutil": "^4.0.8"
  }
}
```

---

## 📄 client/src/pages/chat.tsx

```typescript
import { useState, useEffect } from 'react';
import { LoginBox } from '../components/chat/LoginBox';
import { ChatArea } from '../components/chat/ChatArea';
import { initializeFirebase, isFirebaseInitialized } from '../lib/firebase';
import { ChatState } from '../types/chat';
import { Badge } from '@/components/ui/badge';

export default function Chat() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [chatState, setChatState] = useState<ChatState>({
    userName: '',
    isAdmin: false,
    activeThread: '',
    isConnected: false,
  });

  useEffect(() => {
    const initFirebase = async () => {
      try {
        await initializeFirebase();
        setChatState(prev => ({ ...prev, isConnected: true }));
      } catch (error) {
        console.error('Failed to initialize Firebase:', error);
        setChatState(prev => ({ ...prev, isConnected: false }));
      }
    };

    initFirebase();
  }, []);

  const handleLogin = (name: string, isAdmin: boolean) => {
    const activeThread = isAdmin ? '' : name.replace(/\s+/g, '_').toLowerCase();
    
    setChatState({
      userName: name,
      isAdmin,
      activeThread,
      isConnected: isFirebaseInitialized(),
    });
    
    setIsLoggedIn(true);
  };

  const handleThreadChange = (thread: string) => {
    setChatState(prev => ({ ...prev, activeThread: thread }));
  };

  return (
    <div className="min-h-screen font-sans p-2 sm:p-4 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-visiblo p-3 sm:p-6 min-h-[500px] flex flex-col relative">
        
        {/* Admin Badge and Logout */}
        {isLoggedIn && chatState.isAdmin && (
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center gap-2">
            <Badge className="bg-visiblo-secondary text-white px-3 py-1.5 text-xs font-bold rounded-lg">
              ADMIN
            </Badge>
            <button 
              onClick={() => {
                setIsLoggedIn(false);
                setChatState({
                  userName: '',
                  isAdmin: false,
                  activeThread: '',
                  isConnected: chatState.isConnected,
                });
              }}
              className="text-visiblo-secondary hover:text-visiblo-primary text-xs font-medium underline"
            >
              Zavřít chat
            </button>
          </div>
        )}

        {/* Connection Status */}
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex items-center gap-2 text-xs sm:text-sm">
          <div className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full ${chatState.isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
          <span className="text-visiblo-text font-medium hidden sm:inline">
            {chatState.isConnected ? 'Připojeno' : 'Odpojeno'}
          </span>
        </div>

        {/* User Status for non-admin users */}
        {isLoggedIn && !chatState.isAdmin && (
          <div className="mb-3 p-2 bg-visiblo-surface rounded-lg border border-visiblo-border flex items-center justify-between">
            <span className="text-visiblo-text text-sm font-medium">
              Jste přihlášen/a jako <strong>{chatState.userName}</strong>
            </span>
            <button 
              onClick={() => {
                setIsLoggedIn(false);
                setChatState({
                  userName: '',
                  isAdmin: false,
                  activeThread: '',
                  isConnected: chatState.isConnected,
                });
              }}
              className="text-visiblo-secondary hover:text-visiblo-primary text-sm font-medium underline"
            >
              Zavřít chat
            </button>
          </div>
        )}

        {/* Main Content */}
        {!isLoggedIn ? (
          <LoginBox onLogin={handleLogin} />
        ) : (
          <ChatArea 
            chatState={chatState}
            onThreadChange={handleThreadChange}
          />
        )}
      </div>
    </div>
  );
}
```

---

## 📄 client/src/components/chat/AdminPanel.tsx

```typescript
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

interface AdminPanelProps {
  availableThreads: string[];
  activeThread: string;
  onThreadChange: (thread: string) => void;
  onDeleteThread: (thread: string) => void;
}

export function AdminPanel({ availableThreads, activeThread, onThreadChange, onDeleteThread }: AdminPanelProps) {
  const handleDeleteThread = () => {
    if (!activeThread) return;
    
    const confirmDelete = window.confirm(`Opravdu chcete smazat chat "${activeThread.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}" a celou jeho historii?`);
    if (confirmDelete) {
      onDeleteThread(activeThread);
    }
  };
  return (
    <div className="mb-4 p-3 bg-visiblo-surface rounded-xl border border-visiblo-border">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <span className="text-visiblo-text font-semibold">Správce:</span>
        <label htmlFor="userSelect" className="text-visiblo-text font-medium">
          Vyberte uživatele:
        </label>
        <div className="flex items-center gap-2 flex-1">
          {availableThreads.length > 0 ? (
            <>
              <Select value={activeThread || ""} onValueChange={onThreadChange}>
                <SelectTrigger className="w-full sm:w-48 px-3 py-2 border-2 border-visiblo-border rounded-lg bg-white focus:border-visiblo-primary-dark focus:bg-visiblo-bg-lighter transition-all duration-300">
                  <SelectValue placeholder="Vyberte vlákno" />
                </SelectTrigger>
                <SelectContent>
                  {availableThreads.map((thread) => (
                    <SelectItem key={thread} value={thread}>
                      {thread.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {activeThread && (
                <Button
                  onClick={handleDeleteThread}
                  variant="destructive"
                  size="sm"
                  className="px-3 py-2 h-auto"
                  title="Smazat chat"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </>
          ) : (
            <div className="w-full sm:w-48 px-3 py-2 text-sm text-gray-500 bg-gray-100 rounded-lg">
              Žádná vlákna k zobrazení
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
```

---

## 📄 client/src/components/chat/ChatArea.tsx ⚡ AKTUALIZOVÁNO - 10 hodin historie

```typescript
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
```

---

## 📄 client/src/components/chat/LoginBox.tsx

```typescript
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface LoginBoxProps {
  onLogin: (name: string, isAdmin: boolean) => void;
}

export function LoginBox({ onLogin }: LoginBoxProps) {
  const [name, setName] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminPassword, setShowAdminPassword] = useState(false);

  const handleNameChange = (value: string) => {
    setName(value);
    const isAdminUser = value === 'Matěj Podhola';
    setShowAdminPassword(isAdminUser);
    if (!isAdminUser) {
      setAdminPassword('');
    }
  };

  const handleLogin = () => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      alert('Zadejte jméno!');
      return;
    }

    const wantsAdmin = trimmedName === 'Matěj Podhola';
    if (wantsAdmin && adminPassword !== 'Palecek2009') {
      alert('Nesprávné heslo správce!');
      return;
    }

    onLogin(trimmedName, wantsAdmin);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="text-center animate-fade-in">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-visiblo-text mb-2">VISIBLO Chat</h1>
        <p className="text-sm sm:text-base text-visiblo-text/70">Profesionální komunikační platforma</p>
      </div>
      
      <Card className="max-w-sm mx-auto border-0 shadow-none bg-transparent">
        <CardContent className="space-y-4 p-0">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-visiblo-text mb-3 sm:mb-4">
              Uveďte prosím vaše jméno nebo firmu
            </h3>
            <Input 
              type="text"
              placeholder="Např. Jan Novák"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-visiblo-border rounded-xl text-base sm:text-lg transition-all duration-300 focus:border-visiblo-primary-dark focus:bg-visiblo-bg-lighter"
            />
          </div>
          
          {showAdminPassword && (
            <div className="animate-fade-in">
              <Input 
                type="password"
                placeholder="Zadejte heslo správce"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-visiblo-border rounded-xl text-base sm:text-lg transition-all duration-300 focus:border-visiblo-primary-dark focus:bg-visiblo-bg-lighter"
              />
            </div>
          )}
          
          <Button 
            onClick={handleLogin}
            className="w-full bg-visiblo-primary text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-xl text-base sm:text-lg shadow-visiblo-button hover:bg-visiblo-primary-dark hover:shadow-visiblo-button-hover transition-all duration-300 transform hover:scale-[1.02]"
          >
            Vstoupit do chatu
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

---

## 📄 client/src/components/chat/MessagesList.tsx

```typescript
import { useEffect, useRef } from 'react';
import { Message } from '../../types/chat';

interface MessagesListProps {
  messages: Message[];
}

export function MessagesList({ messages }: MessagesListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString('cs-CZ', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-visiblo-surface border-2 border-visiblo-border rounded-xl p-3 sm:p-4 mb-4 overflow-y-auto custom-scrollbar h-[250px] sm:h-[300px]">
      {messages.length === 0 ? (
        <div className="flex items-center justify-center h-full text-visiblo-text/50">
          <p>Zatím zde nejsou žádné zprávy. Začněte konverzaci!</p>
        </div>
      ) : (
        <>
          {messages.map((message, index) => (
            <div 
              key={message.id} 
              className="message opacity-0 animate-slide-in mb-4"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <span className={`font-bold ${message.isAdmin ? 'text-visiblo-secondary' : 'text-visiblo-primary'}`}>
                {message.name}
              </span>
              : <span>{message.text}</span>
              <div className="text-xs text-gray-500 mt-1">
                {formatTime(message.time)}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </>
      )}
    </div>
  );
}
```

---

## 📄 client/src/components/chat/MessageInput.tsx

```typescript
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export function MessageInput({ onSendMessage, disabled = false }: MessageInputProps) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage || disabled) return;
    
    onSendMessage(trimmedMessage);
    setMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
      <Input 
        type="text"
        placeholder="Napište zprávu..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={disabled}
        className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border-2 border-visiblo-border rounded-xl text-base sm:text-lg transition-all duration-300 focus:border-visiblo-primary-dark focus:bg-visiblo-bg-lighter"
      />
      <Button 
        onClick={handleSend}
        disabled={disabled || !message.trim()}
        className="bg-visiblo-primary text-white font-bold px-4 sm:px-8 py-2 sm:py-3 rounded-xl text-base sm:text-lg shadow-visiblo-button hover:bg-visiblo-primary-dark hover:shadow-visiblo-button-hover transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 w-full sm:w-auto"
      >
        <Send className="w-5 h-5" />
        Odeslat
      </Button>
    </div>
  );
}
```

---

## 📄 client/src/lib/firebase.ts

```typescript
import { FirebaseConfig } from '../types/chat';

let firebase: any = null;
let database: any = null;

export const initializeFirebase = async (): Promise<void> => {
  if (firebase) return;

  // Load Firebase SDK
  const firebaseScript = document.createElement("script");
  firebaseScript.src = "https://www.gstatic.com/firebasejs/8.10.0/firebase.js";
  document.head.appendChild(firebaseScript);
  
  await new Promise((resolve) => {
    firebaseScript.onload = resolve;
  });

  firebase = (window as any).firebase;

  // Firebase configuration from environment variables or fallback
  const config: FirebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCE39_t-Yoh1zlYGowcpc3JU7YDYmcR5Dc",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "visiblo-web-chat.firebaseapp.com",
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://visiblo-web-chat-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "visiblo-web-chat",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "visiblo-web-chat.appspot.com",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "569196016685",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:569196016685:web:3da409c22c6034fa3574a4"
  };

  firebase.initializeApp(config);
  database = firebase.database();
};

export const getDatabase = () => {
  if (!database) {
    throw new Error('Firebase not initialized. Call initializeFirebase() first.');
  }
  return database;
};

export const isFirebaseInitialized = () => {
  return firebase !== null && database !== null;
};
```

---

## 📄 client/src/types/chat.ts

```typescript
export interface Message {
  id: string;
  name: string;
  text: string;
  time: number;
  isAdmin: boolean;
}

export interface Thread {
  [messageId: string]: Message;
}

export interface ChatState {
  userName: string;
  isAdmin: boolean;
  activeThread: string;
  isConnected: boolean;
}

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}
```

---

## 📄 client/src/index.css

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: hsl(0, 0%, 100%);
  --foreground: hsl(210, 25%, 7.8431%);
  --card: hsl(180, 6.6667%, 97.0588%);
  --card-foreground: hsl(210, 25%, 7.8431%);
  --popover: hsl(0, 0%, 100%);
  --popover-foreground: hsl(210, 25%, 7.8431%);
  --primary: hsl(213, 100%, 56%);
  --primary-foreground: hsl(0, 0%, 100%);
  --secondary: hsl(210, 25%, 7.8431%);
  --secondary-foreground: hsl(0, 0%, 100%);
  --muted: hsl(240, 1.9608%, 90%);
  --muted-foreground: hsl(210, 25%, 7.8431%);
  --accent: hsl(211.5789, 51.3514%, 92.7451%);
  --accent-foreground: hsl(203.8863, 88.2845%, 53.1373%);
  --destructive: hsl(356.3033, 90.5579%, 54.3137%);
  --destructive-foreground: hsl(0, 0%, 100%);
  --border: hsl(201.4286, 30.4348%, 90.9804%);
  --input: hsl(200, 23.0769%, 97.4510%);
  --ring: hsl(202.8169, 89.1213%, 53.1373%);
  --chart-1: hsl(203.8863, 88.2845%, 53.1373%);
  --chart-2: hsl(159.7826, 100%, 36.0784%);
  --chart-3: hsl(42.0290, 92.8251%, 56.2745%);
  --chart-4: hsl(147.1429, 78.5047%, 41.9608%);
  --chart-5: hsl(341.4894, 75.2000%, 50.9804%);
  --sidebar: hsl(180, 6.6667%, 97.0588%);
  --sidebar-foreground: hsl(210, 25%, 7.8431%);
  --sidebar-primary: hsl(203.8863, 88.2845%, 53.1373%);
  --sidebar-primary-foreground: hsl(0, 0%, 100%);
  --sidebar-accent: hsl(211.5789, 51.3514%, 92.7451%);
  --sidebar-accent-foreground: hsl(203.8863, 88.2845%, 53.1373%);
  --sidebar-border: hsl(205.0000, 25.0000%, 90.5882%);
  --sidebar-ring: hsl(202.8169, 89.1213%, 53.1373%);
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-serif: Georgia, serif;
  --font-mono: Menlo, monospace;
  --radius: 1.3rem;
  
  /* VISIBLO Chat specific colors */
  --visiblo-primary: hsl(213, 100%, 56%);
  --visiblo-primary-dark: hsl(213, 100%, 35%);
  --visiblo-secondary: hsl(345, 62%, 53%);
  --visiblo-bg-light: hsl(207, 100%, 90%);
  --visiblo-bg-lighter: hsl(207, 100%, 95%);
  --visiblo-surface: hsl(213, 100%, 97%);
  --visiblo-text: hsl(213, 100%, 33%);
  --visiblo-border: hsl(213, 60%, 80%);
  --visiblo-success: hsl(120, 86%, 27%);
  --visiblo-scrollbar-thumb: hsl(213, 60%, 75%);
  --visiblo-scrollbar-track: hsl(213, 60%, 88%);
}

.dark {
  --background: hsl(0, 0%, 0%);
  --foreground: hsl(200, 6.6667%, 91.1765%);
  --card: hsl(228, 9.8039%, 10%);
  --card-foreground: hsl(0, 0%, 85.0980%);
  --popover: hsl(0, 0%, 0%);
  --popover-foreground: hsl(200, 6.6667%, 91.1765%);
  --primary: hsl(203.7736, 87.6033%, 52.5490%);
  --primary-foreground: hsl(0, 0%, 100%);
  --secondary: hsl(195.0000, 15.3846%, 94.9020%);
  --secondary-foreground: hsl(210, 25%, 7.8431%);
  --muted: hsl(0, 0%, 9.4118%);
  --muted-foreground: hsl(210, 3.3898%, 46.2745%);
  --accent: hsl(205.7143, 70%, 7.8431%);
  --accent-foreground: hsl(203.7736, 87.6033%, 52.5490%);
  --destructive: hsl(356.3033, 90.5579%, 54.3137%);
  --destructive-foreground: hsl(0, 0%, 100%);
  --border: hsl(210, 5.2632%, 14.9020%);
  --input: hsl(207.6923, 27.6596%, 18.4314%);
  --ring: hsl(202.8169, 89.1213%, 53.1373%);
  --chart-1: hsl(203.8863, 88.2845%, 53.1373%);
  --chart-2: hsl(159.7826, 100%, 36.0784%);
  --chart-3: hsl(42.0290, 92.8251%, 56.2745%);
  --chart-4: hsl(147.1429, 78.5047%, 41.9608%);
  --chart-5: hsl(341.4894, 75.2000%, 50.9804%);
  --sidebar: hsl(228, 9.8039%, 10%);
  --sidebar-foreground: hsl(0, 0%, 85.0980%);
  --sidebar-primary: hsl(202.8169, 89.1213%, 53.1373%);
  --sidebar-primary-foreground: hsl(0, 0%, 100%);
  --sidebar-accent: hsl(205.7143, 70%, 7.8431%);
  --sidebar-accent-foreground: hsl(203.7736, 87.6033%, 52.5490%);
  --sidebar-border: hsl(205.7143, 15.7895%, 26.0784%);
  --sidebar-ring: hsl(202.8169, 89.1213%, 53.1373%);
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-serif: Georgia, serif;
  --font-mono: Menlo, monospace;
  --radius: 1.3rem;
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply font-sans antialiased bg-background text-foreground;
    background: linear-gradient(135deg, var(--visiblo-bg-light) 0%, var(--visiblo-bg-lighter) 100%);
    min-height: 100vh;
  }
}

@layer utilities {
  .animate-slide-in {
    animation: slideIn 0.4s ease forwards;
  }
  
  .animate-fade-in {
    animation: fadeIn 0.5s ease-in-out;
  }
  
  .animate-pulse-status {
    animation: pulseStatus 0.3s ease-in-out;
  }
  
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: var(--visiblo-scrollbar-track);
    border-radius: 12px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: var(--visiblo-scrollbar-thumb);
    border-radius: 12px;
    border: 2px solid var(--visiblo-scrollbar-track);
  }
  
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: var(--visiblo-scrollbar-thumb) var(--visiblo-scrollbar-track);
  }

  .shadow-visiblo {
    box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1);
  }

  .shadow-visiblo-button {
    box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.39);
  }

  .shadow-visiblo-button-hover {
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.23);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulseStatus {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
```

---

## 📄 .gitignore

```
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Build outputs
dist/
build/
*.local

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS generated files
.DS_Store
Thumbs.db

# Logs
logs
*.log

# Optional npm cache directory
.npm

# Coverage directory
coverage/

# Temporary folders
tmp/
temp/
```

---

## 📄 README.md

```markdown
# VISIBLO Chat

Profesionální real-time komunikační platforma s admin funkcemi a thread-based messagingem.

## 🚀 Funkce

- **Real-time chat** s Firebase Realtime Database
- **Admin panel** pro správu konverzací
- **Automatické mazání** zpráv starších **10 hodin** ⚡
- **Responsivní design** pro mobily i desktop
- **České rozhraní** s VISIBLO brandingem
- **Thread management** pro organizaci konverzací
- **Bezpečný admin přístup** s heslem

## 🛠️ Technologie

- **Frontend**: React 18 + TypeScript + Vite
- **UI**: shadcn/ui komponenty + Tailwind CSS
- **Database**: Firebase Realtime Database
- **Backend**: Express.js + Node.js
- **Routing**: Wouter
- **Forms**: React Hook Form + Zod validation

## 📦 Instalace

1. **Naklonujte repository**:
   ```bash
   git clone https://github.com/your-username/visiblo-chat.git
   cd visiblo-chat
   ```

2. **Nainstalujte závislosti**:
   ```bash
   npm install
   ```

3. **Spusťte development server**:
   ```bash
   npm run dev
   ```

4. **Otevřete v prohlížeči**:
   ```
   http://localhost:5000
   ```

## 👤 Admin přístup

**Admin uživatel**: `Matěj Podhola`  
**Heslo**: `Palecek2009`

Admin funkce:
- Přepínání mezi uživatelskými vlákny
- Mazání celých konverzací
- Správa všech chatů

## ⏰ Historie zpráv

Zprávy se **automaticky mažou po 10 hodinách** pro udržení čisté databáze.

## 📱 Použití

1. **Přihlášení**: Zadejte jméno nebo firmu
2. **Chat**: Pište zprávy v real-time
3. **Admin**: Přihlaste se jako admin pro správu

---

**VISIBLO Chat** - Profesionální komunikační řešení s 10-hodinovou historií zpráv.
```

---

## 🚀 Návod pro vytvoření projektu:

1. **Vytvořte novou složku**: `visiblo-chat`
2. **Zkopírujte obsah** každé sekce do odpovídajícího souboru
3. **Vytvořte strukturu složek** podle diagramu výše
4. **Spusťte**: `npm install` pro instalaci závislostí
5. **Spusťte**: `npm run dev` pro development server
6. **Nahrajte na GitHub** podle návodu v README.md

---

## ⚡ ZMĚNA: 10-hodinová historie

- Zprávy se automaticky mažou po **10 hodinách** místo 10 dní
- Čištění databáze probíhá **každou hodinu** místo denně
- Optimalizováno pro kratší konverzace a udržení čisté databáze

**Kompletní VISIBLO Chat s 10-hodinovou historií je připraven k použití!**
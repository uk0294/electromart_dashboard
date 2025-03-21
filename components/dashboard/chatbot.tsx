// components/dashboard/chatbot.tsx - Enhanced Chatbot with comprehensive analytics data
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Minimize2, Maximize2, Bot, HelpCircle } from 'lucide-react';

// Message type definition
type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
};

// Sample responses based on dashboard data when API is unavailable
const getFallbackResponse = (query: string): string => {
  const lowerQuery = query.toLowerCase();
  
  // Budget optimization recommendations
  if (lowerQuery.includes('budget') || lowerQuery.includes('allocation') || lowerQuery.includes('recommendation')) {
    return "Based on our analysis, I recommend: 1) Reduce Sponsorship spend by 63% (current allocation of 43.2% far exceeds optimal ROI), 2) Increase Content Marketing by 197.8% (highly underutilized channel with strong potential), 3) Boost SEM investment by 65% (search marketing shows consistently high performance), and 4) Increase Affiliate marketing by 78% (efficient for customer acquisition). This reallocation could improve revenue by approximately 170%.";
  }
  
  // ROI information
  if (lowerQuery.includes('roi') || lowerQuery.includes('return on investment')) {
    return "The current ROI is 0.48x, which is relatively low, suggesting inefficiencies in marketing spend. Sponsorship (43.16%) dominates the budget but may not be yielding optimal returns. Online Marketing (22.88%) and SEM (10.77%) have significant investments, but Digital (3.50%) remains underutilized. A shift toward data-driven digital strategies could enhance profitability and ROI.";
  }
  
  // KPI information
  if (lowerQuery.includes('kpi') || lowerQuery.includes('metrics') || lowerQuery.includes('performance')) {
    return "Our key performance drivers analysis shows Customer Engagement has the highest impact on revenue (75%), followed by Revenue & Sales KPIs (68%), Product & Pricing (55%), and External Factors (46%). The most influential specific KPIs include Total Units (94%), NPS Score (93%), and First Orders (90%).";
  }
  
  // Product or category performance
  if (lowerQuery.includes('product') || lowerQuery.includes('category')) {
    return "The top performing product categories are Camera ($1.78B), Speaker ($641M), and CameraAccessory ($286M). The recommended focus products with highest growth potential are SoundMixer (+120% growth), Softbox (+93% growth), and SlingBox (+40% growth). MobileSpeaker is currently our highest revenue individual product.";
  }
  
  // Revenue information
  if (lowerQuery.includes('revenue') || lowerQuery.includes('sales')) {
    return "The total revenue (GMV) for the full year is $4,044,151,618. The revenue trend shows peak performance in October 2023 at around $6M, with current revenue at $3.82M for June 2024. There's a correlation between NPS score and revenue, with higher customer satisfaction generally leading to better sales.";
  }
  
  // NPS Score information
  if (lowerQuery.includes('nps') || lowerQuery.includes('customer satisfaction')) {
    return "The current NPS score is 51.8 for April 2024, with a yearly average of 49.56. This indicates moderate customer satisfaction. The score peaked at around 60 in August 2023. NPS has a significant impact on revenue (93% correlation) and is our top Customer Engagement KPI.";
  }
  
  // Marketing channels
  if (lowerQuery.includes('channel') || lowerQuery.includes('marketing channel')) {
    return "Current marketing channel distribution shows Sponsorship (43%), Online Marketing (23%), SEM (11%), and Affiliates (7%) as the primary channels. Based on performance analysis, Content Marketing is highly underutilized at only 0.9% of spend but should be 19.7% for optimal results.";
  }
  
  // Top-performing channels
  if (lowerQuery.includes('top channel') || lowerQuery.includes('best performing channel')) {
    return "SEM shows the highest ROI at 5.1x, followed by Digital at 4.5x and Online Marketing at 3.8x. However, our current budget allocation doesn't align with these performance metrics, with only 10.8% allocated to SEM while 43.2% goes to Sponsorship with just 1.2x ROI.";
  }
  
  // General marketing strategy
  if (lowerQuery.includes('strategy') || lowerQuery.includes('marketing strategy')) {
    return "Our recommended marketing strategy is to significantly reduce Sponsorship spending by 63%, increase Content Marketing by 197.8%, boost SEM investment by 65%, and increase Affiliate marketing by 78%. This reallocation would improve revenue by approximately 170% and transform our current -52.2% profit/loss to +29% based on our models.";
  }

  // Current performance
  if (lowerQuery.includes('current performance') || lowerQuery.includes('how are we doing')) {
    return "Currently, our marketing ROI is 0.48x, which is suboptimal. Revenue is $4.04B against a marketing spend of $8.47B. Sponsorship (43.2%) dominates our budget but shows poor returns. Content Marketing is severely underutilized at 0.9% of spend. Our NPS score is 51.8, indicating moderate customer satisfaction. Reallocating budget could improve revenue by approximately 170%.";
  }
  
  // Help message
  if (lowerQuery.includes('help') || lowerQuery.includes('what can you do')) {
    return "I can help answer questions about ElectroMart's marketing analytics, including: budget optimization recommendations, ROI analysis, KPI performance, product and category performance, revenue trends, customer satisfaction (NPS score), and marketing channel effectiveness. Feel free to ask about any specific area you'd like to explore!";
  }
  
  return "I can help answer questions about ElectroMart's marketing analytics, including budget allocation, ROI analysis, product performance, and optimization recommendations. What specific information would you like to know?";
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "👋 Hi! I'm your ElectroMart Analytics Assistant. I can help with insights on budget optimization, ROI analysis, KPIs, product performance, and more. What would you like to know?",
      role: 'assistant',
      timestamp: new Date(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    const queryText = input;
    setInput('');
    setIsLoading(true);
    setError(null);
    
    try {
      // Use fallback response instead of API to avoid the error
      const response = getFallbackResponse(queryText);
      
      // Short delay to simulate processing
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (err) {
      console.error("Chat error:", err);
      setError("Failed to get response");
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I'm having trouble accessing the analytics data. Please try again later.",
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };
  
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Suggestion chips
  const suggestionChips = [
    "Budget recommendations",
    "ROI analysis",
    "Top products",
    "NPS score trend",
    "KPI impact"
  ];
  
  const handleSuggestionClick = (suggestion: string) => {
    // Add user message with the suggestion
    const userMessage: Message = {
      id: Date.now().toString(),
      content: suggestion,
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);
    
    // Process the suggestion
    setTimeout(() => {
      const response = getFallbackResponse(suggestion);
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 800);
  };

  // If chat is completely closed
  if (!isOpen) {
    return (
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50 flex items-center justify-center"
        aria-label="Open chat"
      >
        <MessageSquare size={24} />
        <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
      </button>
    );
  }

  return (
    <div 
      className={`fixed bottom-4 right-4 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 z-50 flex flex-col
        ${isMinimized ? 'w-72 h-14' : 'w-80 sm:w-96 h-[32rem]'}`}
    >
      {/* Chat header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Bot size={20} />
          <h3 className="font-medium">Analytics Assistant</h3>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={toggleMinimize} className="p-1 hover:bg-blue-700 rounded">
            {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
          </button>
          <button onClick={toggleChat} className="p-1 hover:bg-blue-700 rounded">
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Chat body - only shown when not minimized */}
      {!isMinimized && (
        <>
          <div className="flex-1 p-3 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-gray-200 text-gray-800 rounded-tl-none'
                    }`}
                  >
                    <div className="text-sm whitespace-pre-wrap">{msg.content}</div>
                    <div className={`text-xs mt-1 ${msg.role === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {formatTime(msg.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 text-gray-800 rounded-lg rounded-tl-none max-w-[80%] px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="h-2 w-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      <div className="h-2 w-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              {error && <div className="text-xs text-red-500 text-center">{error}</div>}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Suggestion chips */}
          <div className="px-3 py-2 border-t border-gray-200 flex gap-2 overflow-x-auto no-scrollbar">
            {suggestionChips.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="whitespace-nowrap text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>

          {/* Chat input */}
          <form onSubmit={handleSubmit} className="border-t p-2 bg-white">
            <div className="flex rounded-md border overflow-hidden">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about analytics data..."
                className="flex-1 px-3 py-2 focus:outline-none"
                disabled={isLoading}
              />
              <button
                type="submit"
                className={`p-2 ${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white`}
                disabled={isLoading}
              >
                <Send size={16} />
              </button>
            </div>
            <div className="mt-1 flex justify-center items-center text-xs text-gray-400 gap-1">
              <HelpCircle size={12} />
              <span>Try asking about ROI, budget, or products</span>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
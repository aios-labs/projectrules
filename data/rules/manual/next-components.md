---
description: "Guidelines for next-components"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "jmagar/piper"
__meta__framework: "NextJS"
__meta__tags: ["NextJS","Components","State Management","Error Handling","UI Design"]
__meta__rate: 8
---
# Next.js Component Rules

Rules for Next.js components and pages.

<rule>
name: next_component_standards
description: Standards for Next.js components and pages
filters:
  - type: file_path
    pattern: "app/.*?/page\\.tsx$|app/.*?/layout\\.tsx$|components/.*?\\.tsx$"

actions:
  - type: suggest
    message: |
      Follow these Next.js component standards:

      1. Component Structure:
         - Use proper prop interfaces
         - Implement proper state management:
           * useState for local state
           * useCallback for handlers
           * useRef for DOM refs
         - Use proper hooks:
           * useEffect for side effects
           * useInView for infinite scroll
           * useDebounce for input
         - Handle component lifecycle
         - Follow component patterns

      2. Error Handling:
         - Use proper error states
         - Implement error boundaries
         - Show user-friendly errors:
           * Use proper error components
           * Show retry options
           * Use toast notifications
         - Handle async errors
         - Log errors properly

      3. Loading States:
         - Use proper loading indicators
         - Handle async operations:
           * Show loading spinners
           * Disable inputs
           * Show progress
         - Use proper Suspense
         - Handle loading UI
         - Follow loading patterns

      4. UI Components:
         - Use shadcn/ui components
         - Follow accessibility:
           * Use proper ARIA labels
           * Handle keyboard navigation
           * Follow a11y patterns
         - Use proper styling:
           * Use Tailwind classes
           * Follow design system
         - Handle responsive design
         - Follow UI patterns

      5. State Management:
         - Handle loading states:
           * isLoading
           * isSending
           * isConnecting
         - Handle error states:
           * error messages
           * retry logic
           * error boundaries
         - Handle success states
         - Use proper state updates
         - Follow state patterns

examples:
  - input: |
      // Bad
      function ChatComponent() {
        const [data, setData] = useState()
        useEffect(() => {
          fetch('/api/chat').then(res => setData(res.json()))
        }, [])
        return <div>{data}</div>
      }

      // Good
      interface ChatComponentProps {
        conversationId?: string;
        initialMessages?: ExtendedChatMessage[];
      }

      function ChatComponent({ conversationId, initialMessages }: ChatComponentProps) {
        const [messages, setMessages] = useState<ExtendedChatMessage[]>(initialMessages ?? []);
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState<string | null>(null);
        const messagesEndRef = useRef<HTMLDivElement>(null);

        const loadMessages = useCallback(async () => {
          if (isLoading || !conversationId) return;
          setIsLoading(true);

          try {
            const response = await chatApi.getMessages({
              conversationId,
              limit: 20
            });
            setMessages(response.messages);
          } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load messages');
            toast.error('Failed to load messages');
          } finally {
            setIsLoading(false);
          }
        }, [conversationId, isLoading]);

        useEffect(() => {
          loadMessages();
        }, [loadMessages]);

        if (error) {
          return (
            <div className="flex items-center justify-center p-4">
              <AlertCircle className="h-6 w-6 text-destructive" />
              <p className="ml-2 text-sm text-destructive">{error}</p>
              <Button onClick={loadMessages} variant="outline" size="sm">
                Retry
              </Button>
            </div>
          );
        }

        if (isLoading) {
          return (
            <div className="flex items-center justify-center p-4">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          );
        }

        return (
          <div className="flex flex-col space-y-4">
            {messages.map((message) => (
              <MessageCard key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        );
      }
    output: "Properly structured Next.js component with proper state management"

metadata:
  priority: high
  version: 1.0
</rule>
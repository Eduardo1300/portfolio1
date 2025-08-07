import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

// Componente de prueba para verificar que los toasts funcionan
export const ToastTest = () => {
  const { toast } = useToast();

  const testSuccess = () => {
    toast({
      title: "✅ Toast de éxito",
      description: "Este toast funciona correctamente",
    });
  };

  const testError = () => {
    toast({
      title: "❌ Toast de error",
      description: "Este toast de error funciona correctamente",
      variant: "destructive",
    });
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 space-x-2">
      <Button onClick={testSuccess} size="sm">
        Test Success Toast
      </Button>
      <Button onClick={testError} size="sm" variant="destructive">
        Test Error Toast
      </Button>
    </div>
  );
};

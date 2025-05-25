// Workaround: Import from the ui/use-toast
import { useToast as useToastOriginal } from "@/hooks/use-toast";
export const useToast = useToastOriginal;
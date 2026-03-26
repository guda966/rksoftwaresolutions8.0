import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

// Shared schema for contact form
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  courseId: z.string().min(1, "Please select a course"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// Mock hook since there is no actual backend endpoint yet
export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactFormValues) => {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Simulate successful submission
      console.log("Form submitted successfully:", data);
      
      return {
        success: true,
        message: "Thank you! We'll contact you within 24 hours.",
      };
    },
  });
}

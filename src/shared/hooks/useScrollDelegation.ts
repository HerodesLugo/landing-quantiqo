import { useRef, useImperativeHandle, ForwardedRef, RefObject } from "react";
import { ScrollableSectionHandle } from "@/shared/components/ui/scroll/types";


interface SectionData {
  hasRef?: boolean;
  // ... cualquier otra propiedad que tengan tus secciones
}

interface UseScrollDelegationProps {
  ref: ForwardedRef<ScrollableSectionHandle>;
  sections: SectionData[];
  activeCheckpoint: number;
  heroRef: RefObject<ScrollableSectionHandle | null>;
}

export const useScrollDelegation = ({
  ref,
  sections,
  activeCheckpoint,
  heroRef,
}: UseScrollDelegationProps) => {
  // El ref que almacenará las instancias de las sub-secciones
  const sectionRefs = useRef<(ScrollableSectionHandle | null)[]>([]);

  const handleSectionScroll = (
    sectionIndex: number,
    direction: "next" | "prev"
  ): boolean => {
    const sectionRef = sectionRefs.current[sectionIndex];

    if (sectionRef) {
      const didConsume = sectionRef.onScroll(direction);
      if (didConsume) return true;

      // Si la sección no consumió el scroll y vamos hacia atrás,
      // delegamos al hero para retroceder frames
      if (direction === "prev") {
        return heroRef.current?.onScroll("prev") ?? false;
      }
    }

    return heroRef.current?.onScroll(direction) ?? false;
  };

  useImperativeHandle(
    ref,
    () => ({
      onScroll: (direction) => {
        const currentSection = sections[activeCheckpoint];

        // Si la sección actual tiene ref, delegar a su handler
        if (currentSection?.hasRef) {
          return handleSectionScroll(activeCheckpoint, direction);
        }

        // Si no, delegar directamente al hero
        return heroRef.current?.onScroll(direction) ?? false;
      },
    }),
    // OBLIGATORIO: Añadir el array de dependencias para que useImperativeHandle
    // se actualice si cambia la sección activa o la data.
    [activeCheckpoint, sections, heroRef] 
  );

  // Devolvemos sectionRefs para que el componente padre pueda enlazar el JSX
  return { sectionRefs };
};
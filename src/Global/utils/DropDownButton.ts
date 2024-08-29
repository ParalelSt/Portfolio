import { useState } from "react";

type UseDropdownReturn = {
  isOpen: boolean;
  toggleDropDown: () => void;
  closeDropDown: () => void;
  openDropDown: () => void;
};

export const useHandleDropDown = (): UseDropdownReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const openDropDown = () => {
    setIsOpen(true);
  };

  const closeDropDown = () => {
    setIsOpen(false);
  };

  return { isOpen, toggleDropDown, openDropDown, closeDropDown };
};

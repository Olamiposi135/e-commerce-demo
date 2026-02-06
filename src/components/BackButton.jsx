import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = ({
  to = "/products",
  label = "Back",
  showIcon = true,
  className = "",
  variant = "default", // default, minimal, pill
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  const variantClasses = {
    default:
      "inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-text-main",
    minimal:
      "inline-flex items-center gap-1 text-text-muted hover:text-primary transition-colors text-sm font-medium",
    pill: "inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-[#dce5e5] hover:border-primary rounded-full transition-colors text-text-main font-medium",
  };

  return (
    <button
      onClick={handleClick}
      className={`${variantClasses[variant]} ${className}`}
    >
      {showIcon && (
        <span className="material-symbols-outlined text-lg">arrow_back</span>
      )}
      {label}
    </button>
  );
};

export default BackButton;

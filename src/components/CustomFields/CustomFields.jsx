import { Select, Input, ThemeProvider, Textarea, Option } from "@material-tailwind/react";
import React, { useState, useRef, useEffect } from "react";

export function CustomSelect({ children, name, handleChange, onChangeWithItem, items, itemKey, value, ...restProps }) {
  const customTheme = {
    select: {
      styles: {
        base: {
          container: {
            minWidth: "min-w-[20px]",
          },
          select: {
            color: "text-blue-gray-900",
            fontFamily: "font-inter",
            disabled: "disabled:border-blue-gray-200 disabled:bg-blue-gray-50 disabled:bg-opacity-80",
          },
          label: {
            fontWeight: "font-normal",
            fontFamily: "font-inter",
            fontSize: "text-md",
          },
          menu: {
            p: "p-1",
            border: "border border-blue-gray-50",
            fontFamily: "font-inter",
            color: "text-blue-gray-900",
          },
        },
      },
    },
  };

  return (
    <div className="w-full">
      <ThemeProvider value={customTheme}>
        <Select value={`${value || ""}`} onChange={(value) => handleChange({ target: { name, value } })} {...restProps}>
          {items.map((item) => (
            <Option key={item.id || item[itemKey]} value={`${item.id || item[itemKey]}`}>
              {item[itemKey]}
            </Option>
          ))}
        </Select>
      </ThemeProvider>
    </div>
  );
}

export function CustomSearchSelect({ children, name, handleChange, onChangeWithItem, items, itemKey, value, ...restProps }) {
  const customTheme = {
    input: {
      styles: {
        base: {
          container: {
            minWidth: "min-w-[20px]",
          },
          input: {
            width: "w-full",
            minWidth: "min-w-[20px]",
            color: "text-blue-gray-900",
            fontFamily: "font-inter",
            disabled: "disabled:border-blue-gray-200 disabled:bg-blue-gray-50 disabled:bg-opacity-80",
          },
          label: {
            fontWeight: "font-normal",
            fontFamily: "font-inter",
            fontSize: "text-md",
            color: "text-blue-gray-800",
          },
        },
      },
    },
  };

  const [filterText, setFilterText] = useState("");
  const [showItems, setShowItems] = useState(false);
  const containerRef = useRef(null);
  const filteredItems = items?.filter((item) => item[itemKey]?.toLowerCase()?.includes(filterText?.toLowerCase()));

  const handleItemClick = (selectedItem) => {
    if (handleChange) handleChange({ target: { name, value: selectedItem?.id } });
    if (onChangeWithItem) onChangeWithItem({ target: { name, value: selectedItem?.id }, selectedItem });
    setShowItems(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowItems(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOnChange = (event) => {
    setFilterText(event.target.value);
    handleChange(event);
  };

  return (
    <div className="w-full relative" ref={containerRef}>
      <ThemeProvider value={customTheme}>
        <Input
          type="text"
          name={name}
          onChange={handleOnChange}
          onFocus={() => setShowItems(true)}
          value={items?.find((item) => item.id === value)?.[itemKey] || value || ""}
          className="border border-gray-300 rounded p-2 w-full"
          icon={<i className={`fa-solid fa-angle-down transition-transform duration-300 ease-in-out ${showItems ? "rotate-180" : ""}`}></i>}
          {...restProps}
        />
        {showItems && (
          <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-[150px] overflow-auto z-30">
            {filteredItems?.map((item, index) => (
              <div key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => handleItemClick(item)}>
                {item[itemKey]}
              </div>
            ))}
          </div>
        )}
      </ThemeProvider>
    </div>
  );
}

export function CustomInput({ children, handleChange, hidden, containerClass, ...restProps }) {
  const customTheme = {
    input: {
      styles: {
        base: {
          container: {
            minWidth: "min-w-[20px]",
          },
          input: {
            width: "w-full",
            minWidth: "min-w-[20px]",
            color: "text-blue-gray-900",
            fontFamily: "font-inter",
            disabled: "disabled:border-blue-gray-200 disabled:bg-blue-gray-50 disabled:bg-opacity-80",
          },
          label: {
            fontWeight: "font-normal",
            fontFamily: "font-inter",
            fontSize: "text-md",
            color: "text-blue-gray-800",
          },
        },
      },
    },
  };

  if (hidden) return;

  return (
    <div className="w-full">
      {/* {label ? (
        <Typography
          htmlFor={restProps.id}
          className="block text-sm font-medium font-inter opacity-95"
        >
          {label}
        </Typography>
      ) : (
        <></>
      )} */}
      <ThemeProvider value={customTheme}>
        <div className={containerClass}>
          <Input {...restProps} theme={customTheme} crossOrigin={undefined} onChange={handleChange} />
        </div>
      </ThemeProvider>
    </div>
  );
}

export function CustomPasswordInput(props) {
  const { children, handleChange, hidden, ...restProps } = props;

  const customTheme = {
    input: {
      styles: {
        base: {
          container: {
            minWidth: "min-w-[20px]",
          },
          input: {
            width: "w-full",
            minWidth: "min-w-[20px]",
            color: "text-blue-gray-900",
            fontFamily: "font-inter",
            disabled: "disabled:border-blue-gray-200 disabled:bg-blue-gray-50 disabled:bg-opacity-80",
          },
          label: {
            fontWeight: "font-normal",
            fontFamily: "font-inter",
            fontSize: "text-md",
            color: "text-blue-gray-800",
          },
        },
      },
    },
  };

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prevState) => !prevState);
  };

  if (hidden) return;

  return (
    <div className="w-full">
      {/* {label ? (
        <Typography
          htmlFor={restProps.id}
          className="block text-sm font-medium font-inter opacity-95"
        >
          {label}
        </Typography>
      ) : (
        <></>
      )} */}
      <ThemeProvider value={customTheme}>
        <Input
          type={show ? "text" : "password"}
          icon={show ? <i className="fa-solid fa-eye cursor-pointer" onClick={handleShow}></i> : <i className="fa-solid fa-eye-slash cursor-pointer" onClick={handleShow}></i>}
          {...restProps}
          theme={customTheme}
          crossOrigin={undefined}
          onChange={handleChange}
        />
      </ThemeProvider>
    </div>
  );
}

export function CustomTextarea(props) {
  const { children, handleChange, ...restProps } = props;

  const customTheme = {
    textArea: {
      styles: {
        base: {
          container: {
            minWidth: "min-w-[20px]",
          },
          input: {
            width: "w-full",
            minWidth: "min-w-[20px]",
            color: "text-blue-gray-900",
            fontFamily: "font-inter",
            disabled: "disabled:border-blue-gray-200 disabled:bg-blue-gray-50 disabled:bg-opacity-80",
          },
          label: {
            fontWeight: "font-normal",
            fontFamily: "font-inter",
            fontSize: "text-md",
            color: "text-blue-gray-800",
          },
        },
      },
    },
  };

  return (
    <div className="w-full">
      {/* {label ? (
        <Typography
          htmlFor={restProps.id}
          className="block text-sm font-medium font-inter opacity-95"
        >
          {label}
        </Typography>
      ) : (
        <></>
      )} */}
      <ThemeProvider value={customTheme}>
        <Textarea {...restProps} theme={customTheme} crossOrigin={undefined} onChange={handleChange} />
      </ThemeProvider>
    </div>
  );
}
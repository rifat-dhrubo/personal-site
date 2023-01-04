import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import React from "react";

export const ButtonTypesArray = ["primary", "secondary"] as const;
export type ButtonType = typeof ButtonTypesArray[number];

const wrapperClass = cva("group rounded-md", {
  variants: {
    intent: {
      primary:
        "bg-zinc-400/60 ring-zinc-400 ring-offset-[8px] focus:ring-2 dark:bg-zinc-900 dark:ring-zinc-700 dark:ring-offset-black block cursor-pointer",
    },
  },
});

const buttonClass = cva(
  "duration-[600ms] group-hover:duration-[250ms] ease-[cubic-bezier(.3, .7, .4, 1)] group-hover:ease-[cubic-bezier(.3, .7, .4, 1.5)] block -translate-y-1.5 transform-gpu rounded-md transition will-change-transform group-hover:-translate-y-2 group-active:-translate-y-[2px] group-active:duration-75 ",
  {
    variants: {
      intent: {
        primary: "bg-white/80 dark:bg-black/60",
      },
      size: {
        sm: "px-4 pt-3 pb-2 text-lg",
        base: "px-6 pt-4 pb-3 text-xl",
        md: "px-8 pt-6 pb-5 text-2xl",
        lg: "px-10 pt-6 pb-5 text-3xl",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "base",
    },
  }
);

type Ref = HTMLButtonElement;

type ButtonProps = VariantProps<typeof buttonClass>;

interface Props extends React.ComponentPropsWithRef<"button">, ButtonProps {
  children: React.ReactNode;
  wrapperClassName?: string;
}

export const Button = React.forwardRef<Ref, Props>(function Button(
  {
    intent = "primary",
    size = "base",
    children,
    ref: _ref,
    className,
    wrapperClassName,
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      className={wrapperClass({ intent, className: wrapperClassName })}
      {...props}
    >
      <span className={buttonClass({ intent, size, className })}>
        {children}
      </span>
    </button>
  );
});

interface LinkProps extends React.ComponentPropsWithRef<"a">, ButtonProps {
  children: React.ReactNode;
  wrapperClassName?: string;
}
type LinkRef = HTMLAnchorElement;

export const LinkButton = React.forwardRef<LinkRef, LinkProps>(
  function LinkButton(
    {
      intent = "primary",
      size = "base",
      children,
      ref: _ref,
      className,
      wrapperClassName,
      ...props
    },
    ref
  ) {
    return (
      <a
        ref={ref}
        className={wrapperClass({ intent, className: wrapperClassName })}
        {...props}
      >
        <span className={buttonClass({ intent, size, className })}>
          {children}
        </span>
      </a>
    );
  }
);

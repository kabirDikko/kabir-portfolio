/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        "text-body": "hsl(var(--text-body))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar))",
          foreground: "hsl(var(--sidebar-foreground))",
          border: "hsl(var(--sidebar-border))",
          hover: "hsl(var(--sidebar) / 0.3)",
        },
      },
      boxShadow: {
        header: "0 1px 3px rgba(0, 0, 0, 0.05)",
        sm: "0 1px 2px rgba(0, 0, 0, 0.03)",
        md: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)",
        lg: "0 2px 4px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03)",
      },
      fontFamily: {
        sans: ["JetBrains Mono", "monospace"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        xs: ["0.625rem", { lineHeight: "0.875rem" }], // 10px
        sm: ["0.75rem", { lineHeight: "1.125rem" }], // 12px
        base: ["0.8125rem", { lineHeight: "1.25rem" }], // 13px
        lg: ["0.875rem", { lineHeight: "1.375rem" }], // 14px
        xl: ["1rem", { lineHeight: "1.5rem" }], // 16px
        "2xl": ["1.125rem", { lineHeight: "1.75rem" }], // 18px
        "3xl": ["1.25rem", { lineHeight: "1.875rem" }], // 20px
      },
      spacing: {
        0.5: "0.125rem", // 2px
        1: "0.25rem", // 4px
        1.5: "0.375rem", // 6px
        2: "0.5rem", // 8px
        2.5: "0.625rem", // 10px
        3: "0.75rem", // 12px
        3.5: "0.875rem", // 14px
        4: "1rem", // 16px
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "var(--foreground)",
            fontSize: "0.875rem",
            p: {
              marginTop: "0.75rem",
              marginBottom: "0.75rem",
            },
            a: {
              color: "var(--primary)",
              "&:hover": {
                color: "var(--primary)",
              },
            },
            h1: {
              color: "var(--foreground)",
              fontSize: "1.5rem",
              fontWeight: "500",
              marginTop: "1.5rem",
              marginBottom: "1rem",
            },
            h2: {
              color: "var(--foreground)",
              fontSize: "1.25rem",
              fontWeight: "500",
              marginTop: "1.25rem",
              marginBottom: "0.75rem",
            },
            h3: {
              color: "var(--foreground)",
              fontSize: "1.125rem",
              fontWeight: "500",
              marginTop: "1.25rem",
              marginBottom: "0.75rem",
            },
            h4: {
              color: "var(--foreground)",
              fontSize: "1rem",
              fontWeight: "500",
            },
            code: {
              color: "var(--foreground)",
              backgroundColor: "var(--accent)",
              padding: "0.15rem 0.25rem",
              borderRadius: "0.25rem",
              fontWeight: "400",
              fontSize: "0.8125rem",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            pre: {
              backgroundColor: "rgb(22, 22, 29)",
              color: "var(--foreground)",
              borderRadius: "0.25rem",
              padding: "0.75rem 1rem",
              fontSize: "0.8125rem",
            },
          },
        },
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss/plugin")(({ addBase }) => {
      addBase({
        ":root": {
          "--background": "120 15% 5%",
          "--foreground": "120 100% 90%",
          "--card": "120 15% 8%",
          "--card-foreground": "120 100% 90%",
          "--popover": "120 15% 8%",
          "--popover-foreground": "120 100% 90%",
          "--primary": "135 100% 50%",
          "--primary-foreground": "0 0% 0%",
          "--secondary": "135 80% 20%",
          "--secondary-foreground": "120 100% 90%",
          "--muted": "120 15% 12%",
          "--muted-foreground": "120 30% 70%",
          "--accent": "135 100% 30%",
          "--accent-foreground": "120 100% 90%",
          "--destructive": "0 100% 50%",
          "--destructive-foreground": "0 0% 0%",
          "--border": "120 50% 15%",
          "--input": "120 50% 15%",
          "--ring": "135 100% 50%",
          "--radius": "0.125rem",
          "--sidebar": "120 15% 7%",
          "--sidebar-foreground": "120 100% 90%",
          "--sidebar-border": "120 30% 10%",
          "--text-body": "120 30% 90%",
        },
      });
    }),
  ],
};

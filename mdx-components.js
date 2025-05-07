import { useMDXComponents as getThemeComponents } from "nextra-theme-docs"; // nextra-theme-blog or your custom theme
import { withGitHubAlert } from "nextra/components";

// Get the default MDX components
const themeComponents = getThemeComponents();

// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components,
    blockquote: Blockquote,
  };
}

const Blockquote = withGitHubAlert(({ type, ...props }) => {
  return <Alert type={type} {...props} />;
}, Block);

function Alert({ type, children }) {
  const content = children.filter((x) => typeof x.type !== "string");
  return <div className={`callout-box callout-${type}`}>{content}</div>;
}

function Block({ children }) {
  return <div>{children}</div>;
}

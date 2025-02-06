interface NetlifyIdentity {
  open: () => void;
  on: (event: string, callback: (user?: any) => void) => void;
}

interface Window {
  netlifyIdentity: NetlifyIdentity;
}

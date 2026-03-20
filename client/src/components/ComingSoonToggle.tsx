import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

export function ComingSoonToggle() {
  const [isComingSoonMode, setIsComingSoonMode] = useState(false);

  useEffect(() => {
    // Load current state from localStorage
    const mode = localStorage.getItem('comingSoonMode') === 'true';
    setIsComingSoonMode(mode);
  }, []);

  const toggleComingSoonMode = () => {
    const newMode = !isComingSoonMode;
    localStorage.setItem('comingSoonMode', String(newMode));
    setIsComingSoonMode(newMode);
  };

  const togglePreviewMode = () => {
    const currentUrl = window.location.href;
    if (currentUrl.includes('?preview=true')) {
      window.location.href = currentUrl.replace('?preview=true', '');
    } else {
      window.location.href = currentUrl + (currentUrl.includes('?') ? '&preview=true' : '?preview=true');
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-card border border-border rounded-lg p-4">
        <h3 className="font-semibold text-card-foreground mb-3">Coming Soon Mode</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Toggle between Coming Soon landing page and full website
        </p>
        <Button
          onClick={toggleComingSoonMode}
          variant={isComingSoonMode ? "default" : "outline"}
          className="w-full"
        >
          {isComingSoonMode ? "Coming Soon Mode: ON" : "Coming Soon Mode: OFF"}
        </Button>
      </div>

      <div className="bg-card border border-border rounded-lg p-4">
        <h3 className="font-semibold text-card-foreground mb-3">Preview Mode</h3>
        <p className="text-sm text-muted-foreground mb-4">
          View full website even when Coming Soon mode is active
        </p>
        <Button
          onClick={togglePreviewMode}
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
        >
          {window.location.href.includes('?preview=true') ? (
            <>
              <EyeOff className="w-4 h-4" />
              Exit Preview Mode
            </>
          ) : (
            <>
              <Eye className="w-4 h-4" />
              Enter Preview Mode
            </>
          )}
        </Button>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          <strong>Tip:</strong> Share the preview link with clients: <br />
          <code className="bg-blue-100 px-2 py-1 rounded text-xs">
            {window.location.origin}/?preview=true
          </code>
        </p>
      </div>
    </div>
  );
}

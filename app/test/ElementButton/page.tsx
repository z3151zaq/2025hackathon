// app/test/element-button/page.tsx
"use client";

import { ElementButton } from "@/app/components/ui/ElementButton";

export default function ElementButtonTestPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">ElementButton 测试页</h1>

      <div className="flex flex-wrap gap-4">
        <ElementButton>默认</ElementButton>
        <ElementButton variant="primary">Primary</ElementButton>
        <ElementButton variant="success">Success</ElementButton>
        <ElementButton variant="warning">Warning</ElementButton>
        <ElementButton variant="danger">Danger</ElementButton>
        <ElementButton variant="info">Info</ElementButton>
        <ElementButton variant="text">Text</ElementButton>
      </div>

      <div className="flex flex-wrap gap-4">
        <ElementButton plain variant="primary">Plain Primary</ElementButton>
        <ElementButton plain variant="danger">Plain Danger</ElementButton>
        <ElementButton plain variant="success">Plain Success</ElementButton>
      </div>

      <div className="flex flex-wrap gap-4">
        <ElementButton size="sm">Small</ElementButton>
        <ElementButton size="md">Medium</ElementButton>
        <ElementButton size="lg">Large</ElementButton>
      </div>

      <div className="flex flex-wrap gap-4">
        <ElementButton round variant="primary">Round</ElementButton>
        <ElementButton circle variant="success">C</ElementButton>
      </div>
    </div>
  );
}

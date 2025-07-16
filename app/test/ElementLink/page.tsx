"use client";

import { ElementLink } from "@/app/components/ui/ElementLink";

export default function ElementLinkTestPage() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">ElementLink 测试页</h1>

      {/* 类型变体 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">1. 不同 type 类型</h2>
        <div className="flex flex-col gap-2">
          <ElementLink href="#" variant="default">Default</ElementLink>
          <ElementLink href="#" variant="primary">Primary</ElementLink>
          <ElementLink href="#" variant="success">Success</ElementLink>
          <ElementLink href="#" variant="warning">Warning</ElementLink>
          <ElementLink href="#" variant="danger">Danger</ElementLink>
          <ElementLink href="#" variant="info">Info</ElementLink>
        </div>
      </section>

      {/* 下划线变体 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">2. 下划线 underline</h2>
        <div className="flex flex-col gap-2">
          <ElementLink href="#" variant="primary" underline>
            Primary + Underline
          </ElementLink>
          <ElementLink href="#" variant="danger" underline>
            Danger + Underline
          </ElementLink>
        </div>
      </section>

      {/* 禁用状态 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">3. 禁用状态</h2>
        <div className="flex flex-col gap-2">
          <ElementLink href="#" variant="primary" disabled>
            Disabled Primary
          </ElementLink>
          <ElementLink href="#" variant="danger" underline disabled>
            Disabled Danger + Underline
          </ElementLink>
        </div>
      </section>
    </div>
  );
}

export default function UIRender({ if: condition, children, else: fallback }: { if: boolean; children: React.ReactNode; else?: React.ReactNode }) {
    return <>{condition ? children : fallback ?? null}</>;
}
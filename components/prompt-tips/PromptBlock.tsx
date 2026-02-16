import { CopyPromptButton } from './CopyPromptButton'

export function PromptBlock({ text }: { text: string }) {
  return (
    <div className="relative group">
      <div className="bg-gray-900/50 dark:bg-slate-900 rounded-xl p-4 pr-40 font-mono text-sm text-gray-100 border border-gray-700 dark:border-slate-600">
        {text}
      </div>
      <CopyPromptButton text={text} />
    </div>
  )
}

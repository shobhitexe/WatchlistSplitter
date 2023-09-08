export default function CopyDialog({ index }: { index: number }) {
  return (
    <div className="fixed bottom-10 left-[50%] -translate-x-[50%] bg-inputBG py-5 px-20 rounded-xl shadow-xl">
      Copied batch {index} to clipboard
    </div>
  );
}

import { Payment } from '../components/payment';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="space-y-8">
          <h1 className="text-3xl font-bold text-gray-900">Standard payment</h1>
          <Payment />
        </div>
      </div>
    </main>
  );
} 
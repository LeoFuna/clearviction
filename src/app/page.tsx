import Form from '@/components/templates/form/Form';

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-green-300 to-green-700">
      <div className="bg-white rounded-lg flex flex-col items-center justify-center lg:w-2/6 w-5/6 py-10 lg:py-6 gap-2 shadow-2xl">
        <h1 className="text-2xl font-bold text-green-700 drop-shadow-md">
          Subscription Form
        </h1>
        <Form />
      </div>
    </main>
  );
}

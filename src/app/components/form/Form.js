import { useForm } from "react-hook-form";

export default function Form({ fields, onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium">{field.label}</label>
          <input
            {...register(field.name)}
            type={field.type}
            placeholder={field.placeholder}
            className="mt-1 block w-full rounded border p-2"
          />
        </div>
      ))}
      <button
        type="submit"
        className="mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Gửi
      </button>
    </form>
  );
}

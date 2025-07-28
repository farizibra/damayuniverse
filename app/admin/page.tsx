import { LoginForm } from "../../components/login-form";

export default function AdminPage() {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  );
}

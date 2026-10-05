"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { auth, googleProvider, appleProvider } from "../../../lib/firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
  type AuthProvider,
} from "firebase/auth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  EnvelopeIcon,
  LockClosedIcon,
  SparklesIcon,
  ArrowRightOnRectangleIcon,
  UserCircleIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const getErrorMessage = (error: unknown, fallback: string) =>
  error instanceof Error && error.message ? error.message : fallback;

export default function Login() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [view, setView] = useState<"signin" | "signup" | "forgot" | "verify">("signin");
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [infoMsg, setInfoMsg] = useState("");

  // Pantry and Recipe interactive state
  const [pantry, setPantry] = useState([
    { id: 1, name: "Chicken Breast", daysLeft: 3, checked: true },
    { id: 2, name: "Fresh Spinach", daysLeft: 2, checked: true },
    { id: 3, name: "Lemons", daysLeft: 7, checked: false },
    { id: 4, name: "Greek Yogurt", daysLeft: 5, checked: false },
  ]);
  const [newIngredient, setNewIngredient] = useState("");
  const [aiRecipe, setAiRecipe] = useState<string | null>(null);
  const [generatingRecipe, setGeneratingRecipe] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      setUser(usr);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleSSO = async (provider: AuthProvider) => {
    setLoading(true);
    setErrorMsg("");
    setInfoMsg("");
    try {
      await signInWithPopup(auth, provider);
      setInfoMsg("Successfully signed in.");
    } catch (err: unknown) {
      console.error(err);
      setErrorMsg(getErrorMessage(err, "Failed to authenticate via SSO."));
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setInfoMsg("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (!userCredential.user.emailVerified) {
        setView("verify");
      } else {
        setInfoMsg("Successfully logged in.");
      }
    } catch (err: unknown) {
      console.error(err);
      setErrorMsg(getErrorMessage(err, "Invalid credentials."));
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setInfoMsg("");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      setView("verify");
    } catch (err: unknown) {
      console.error(err);
      setErrorMsg(getErrorMessage(err, "Failed to create account."));
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setInfoMsg("");
    try {
      await sendPasswordResetEmail(auth, email);
      setInfoMsg("Password reset email sent. Please check your inbox.");
      setView("signin");
    } catch (err: unknown) {
      console.error(err);
      setErrorMsg(getErrorMessage(err, "Failed to send password reset email."));
    } finally {
      setLoading(false);
    }
  };

  const handleResendVerification = async () => {
    setLoading(true);
    setErrorMsg("");
    setInfoMsg("");
    try {
      if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser);
        setInfoMsg("Verification email resent successfully.");
      } else {
        setErrorMsg("No active session found. Please log in first.");
        setView("signin");
      }
    } catch (err: unknown) {
      console.error(err);
      setErrorMsg(getErrorMessage(err, "Failed to resend verification."));
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut(auth);
      setInfoMsg("Logged out successfully.");
      setView("signin");
    } catch (err: unknown) {
      console.error(err);
    }
  };

  // Pantry functions
  const togglePantryItem = (id: number) => {
    setPantry(pantry.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  };

  const addIngredient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIngredient.trim()) return;
    setPantry([
      ...pantry,
      { id: Date.now(), name: newIngredient, daysLeft: 7, checked: true },
    ]);
    setNewIngredient("");
  };

  const deleteIngredient = (id: number) => {
    setPantry(pantry.filter((item) => item.id !== id));
  };

  const generateRecipeFromAI = () => {
    setGeneratingRecipe(true);
    setAiRecipe(null);
    const selected = pantry.filter((p) => p.checked).map((p) => p.name);
    
    setTimeout(() => {
      setGeneratingRecipe(false);
      if (selected.length === 0) {
        setAiRecipe("Please check at least one ingredient in your pantry above to let ampleat build a recipe!");
        return;
      }
      setAiRecipe(
        `### Lemon Spinach Chicken Breast\n\n**Prep Time**: 15m | **Cook Time**: 20m\n\nBased on your selected pantry ingredients (**${selected.join(
          ", "
        )}**), here is your customized recipe:\n\n1. **Prep**: Season Chicken Breast with salt, pepper, and garlic powder.\n2. **Sear**: Heat olive oil in a skillet, sear chicken 6-7 mins each side until golden.\n3. **Sauté**: Toss in the Fresh Spinach and sauté until wilted.\n4. **Glaze**: Squeeze fresh Lemon juice over the chicken to deglaze the pan.\n5. **Serve**: Platter the chicken, top with sautéed spinach, and drizzle pan drippings on top.`
      );
    }, 1500);
  };

  return (
    <div className="relative min-h-dvh bg-surface-950 text-surface-100 flex flex-col overflow-x-hidden">
      <Navbar />

      {/* ── Background Orbs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/[0.04] rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-supporting-400/[0.03] rounded-full blur-[140px]" />
      </div>

      <main className="flex-grow pt-32 pb-24 px-6 relative z-10 max-w-4xl mx-auto w-full flex flex-col justify-center">
        {authLoading ? (
          <div className="text-center py-12">
            <span className="w-8 h-8 rounded-full border-4 border-primary-500/30 border-t-primary-500 animate-spin inline-block" />
            <p className="text-xs text-surface-500 mt-2">Loading authentication state...</p>
          </div>
        ) : user ? (
          /* ── Authenticated Premium Mock Dashboard ── */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-3 gap-8 items-start"
          >
            {/* Left Column: User info & Pantry checklist */}
            <div className="md:col-span-1 space-y-6">
              <div className="rounded-2xl border border-white/[0.06] bg-surface-900/40 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <UserCircleIcon className="w-10 h-10 text-primary-400" />
                  <div className="overflow-hidden">
                    <p className="text-xs text-surface-450 uppercase tracking-widest font-semibold">Beta Tester Session</p>
                    <p className="text-sm font-bold text-white truncate">{user.displayName || user.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="w-full rounded-xl border border-white/10 hover:bg-red-500/10 hover:border-red-500/20 hover:text-red-400 py-2.5 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <ArrowRightOnRectangleIcon className="w-4 h-4" />
                  Sign Out
                </button>
              </div>

              {/* Interactive Pantry */}
              <div className="rounded-2xl border border-white/[0.06] bg-surface-900/40 p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">My Pantry</h3>
                
                <form onSubmit={addIngredient} className="flex gap-2 mb-4">
                  <input
                    type="text"
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                    placeholder="Add ingredient..."
                    className="flex-grow rounded-lg bg-surface-950 border border-white/10 px-3 py-1.5 text-xs text-white focus:outline-none focus:border-primary-500/50"
                  />
                  <button type="submit" className="bg-primary-500 hover:bg-primary-400 p-2 rounded-lg text-white transition-colors">
                    <PlusIcon className="w-4 h-4" />
                  </button>
                </form>

                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {pantry.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">
                      <label className="flex items-center gap-2.5 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={item.checked}
                          onChange={() => togglePantryItem(item.id)}
                          className="rounded border-white/10 text-primary-500 focus:ring-0 focus:ring-offset-0 bg-surface-950 w-4 h-4"
                        />
                        <div>
                          <p className={`text-xs ${item.checked ? "text-white font-medium" : "text-surface-500 line-through"}`}>{item.name}</p>
                          <p className="text-[9px] text-surface-500">expires in {item.daysLeft} days</p>
                        </div>
                      </label>
                      <button onClick={() => deleteIngredient(item.id)} className="text-surface-500 hover:text-red-400 p-1">
                        <TrashIcon className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: AI Recipe Assist Panel */}
            <div className="md:col-span-2 space-y-6">
              <div className="rounded-2xl border border-white/[0.06] bg-surface-900/40 p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <SparklesIcon className="w-5 h-5 text-primary-400" />
                  <h2 className="text-lg font-bold text-white">AI Recipe Assistant</h2>
                </div>
                <p className="text-xs text-surface-450 mb-6">
                  Select ingredients in your pantry on the left, then click below to let ampleat build an adaptive recipe card automatically.
                </p>

                <button
                  onClick={generateRecipeFromAI}
                  disabled={generatingRecipe}
                  className="w-full bg-primary-500 hover:bg-primary-400 py-3 rounded-xl text-sm font-bold text-white shadow-lg shadow-primary-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {generatingRecipe ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Analyzing pantry ingredients...
                    </>
                  ) : (
                    <>
                      <SparklesIcon className="w-4 h-4" />
                      Generate Adaptive Recipe
                    </>
                  )}
                </button>

                {/* Recipe display card */}
                <div className="mt-6">
                  <AnimatePresence mode="wait">
                    {aiRecipe && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="rounded-xl border border-primary-500/20 bg-primary-500/[0.02] p-5 text-sm text-surface-300 leading-relaxed font-sans"
                      >
                        {/* Render simple markdown layout manually */}
                        {aiRecipe.split("\n\n").map((para, i) => {
                          if (para.startsWith("###")) {
                            return <h3 key={i} className="text-base font-bold text-white mb-2">{para.replace("### ", "")}</h3>;
                          }
                          if (para.startsWith("**")) {
                            return <p key={i} className="text-xs text-primary-400 font-semibold mb-4">{para}</p>;
                          }
                          return <p key={i} className="mb-3 text-xs sm:text-sm text-surface-300">{para}</p>;
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* ── Non-Authenticated State (Forms) ── */
          <div className="rounded-3xl border border-white/[0.06] bg-surface-900/40 p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden">
            {/* Notification banners */}
            <AnimatePresence>
              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 flex items-start gap-2.5 rounded-xl border border-red-500/20 bg-red-500/10 p-3.5 text-xs text-red-400"
                >
                  <ExclamationCircleIcon className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </motion.div>
              )}
              {infoMsg && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 flex items-start gap-2.5 rounded-xl border border-primary-500/20 bg-primary-500/10 p-3.5 text-xs text-primary-400"
                >
                  <CheckCircleIcon className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{infoMsg}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {view === "signin" && (
                <motion.div
                  key="signin"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-xs text-surface-400">Log in to manage your kitchen planner</p>
                  </div>

                  {/* SSO Buttons */}
                  <div className="space-y-2.5 mb-6">
                    <button
                      type="button"
                      onClick={() => handleSSO(googleProvider)}
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] py-3 text-sm font-semibold transition-all duration-300 cursor-pointer"
                    >
                      {/* Google SVG */}
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="currentColor"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                      Continue with Google
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSSO(appleProvider)}
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] py-3 text-sm font-semibold transition-all duration-300 cursor-pointer"
                    >
                      {/* Apple SVG */}
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.82M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.62.71-1.16 1.85-1.01 2.96 1.12.09 2.27-.58 2.94-1.39" />
                      </svg>
                      Continue with Apple
                    </button>
                  </div>

                  <div className="relative flex py-3 items-center mb-6">
                    <div className="flex-grow border-t border-white/5"></div>
                    <span className="flex-shrink mx-4 text-surface-500 text-[10px] uppercase tracking-wider">or</span>
                    <div className="flex-grow border-t border-white/5"></div>
                  </div>

                  <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-semibold text-surface-400 uppercase tracking-widest mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <EnvelopeIcon className="absolute left-4 top-3.5 w-4 h-4 text-surface-500" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-xl bg-surface-950 border border-white/10 pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500/50 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold text-surface-400 uppercase tracking-widest mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <LockClosedIcon className="absolute left-4 top-3.5 w-4 h-4 text-surface-500" />
                        <input
                          type="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full rounded-xl bg-surface-950 border border-white/10 pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500/50 transition-colors"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>

                    <div className="text-right">
                      <button
                        type="button"
                        onClick={() => setView("forgot")}
                        className="text-xs text-primary-400 hover:underline"
                      >
                        Forgot password?
                      </button>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl bg-primary-500 hover:bg-primary-400 py-3.5 text-sm font-semibold text-white transition-all duration-300 flex items-center justify-center shadow-lg shadow-primary-500/20 disabled:opacity-50"
                    >
                      {loading ? (
                        <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      ) : (
                        "Sign In"
                      )}
                    </button>
                  </form>

                  <p className="text-center text-xs text-surface-450 mt-6">
                    Don&apos;t have an account?{" "}
                    <button type="button" onClick={() => setView("signup")} className="text-primary-400 font-semibold hover:underline">
                      Create one
                    </button>
                  </p>
                </motion.div>
              )}

              {view === "signup" && (
                <motion.div
                  key="signup"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-white mb-2">Create Account</h1>
                    <p className="text-xs text-surface-400">Join the private beta tester squad</p>
                  </div>

                  <form onSubmit={handleSignUp} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-semibold text-surface-400 uppercase tracking-widest mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl bg-surface-950 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500/50 transition-colors"
                        placeholder="Sarah Connor"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold text-surface-400 uppercase tracking-widest mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl bg-surface-950 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500/50 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold text-surface-400 uppercase tracking-widest mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-xl bg-surface-950 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500/50 transition-colors"
                        placeholder="••••••••"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl bg-primary-500 hover:bg-primary-400 py-3.5 text-sm font-semibold text-white transition-all duration-300 flex items-center justify-center shadow-lg shadow-primary-500/20 disabled:opacity-50"
                    >
                      {loading ? (
                        <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      ) : (
                        "Create Account"
                      )}
                    </button>
                  </form>

                  <p className="text-center text-xs text-surface-450 mt-6">
                    Already have an account?{" "}
                    <button type="button" onClick={() => setView("signin")} className="text-primary-400 font-semibold hover:underline">
                      Log in
                    </button>
                  </p>
                </motion.div>
              )}

              {view === "forgot" && (
                <motion.div
                  key="forgot"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-white mb-2">Reset Password</h1>
                    <p className="text-xs text-surface-400">Enter your email to receive recovery instructions</p>
                  </div>

                  <form onSubmit={handleResetPassword} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-semibold text-surface-400 uppercase tracking-widest mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl bg-surface-950 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500/50 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl bg-primary-500 hover:bg-primary-400 py-3.5 text-sm font-semibold text-white transition-all duration-300 flex items-center justify-center shadow-lg shadow-primary-500/20 disabled:opacity-50"
                    >
                      {loading ? (
                        <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      ) : (
                        "Send Recovery Email"
                      )}
                    </button>
                  </form>

                  <p className="text-center text-xs text-surface-450 mt-6">
                    Remember password?{" "}
                    <button type="button" onClick={() => setView("signin")} className="text-primary-400 font-semibold hover:underline">
                      Log in
                    </button>
                  </p>
                </motion.div>
              )}

              {view === "verify" && (
                <motion.div
                  key="verify"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-4"
                >
                  <EnvelopeIcon className="w-12 h-12 text-primary-400 mx-auto mb-4 animate-pulse" />
                  <h1 className="text-2xl font-bold text-white mb-2">Verify your email</h1>
                  <p className="text-xs text-surface-400 leading-relaxed mb-6">
                    We sent a verification link to your email inbox. Please click the link to activate your account.
                  </p>

                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={handleResendVerification}
                      disabled={loading}
                      className="w-full rounded-xl bg-primary-500 hover:bg-primary-400 py-3.5 text-sm font-semibold text-white transition-all duration-300"
                    >
                      Resend Verification Email
                    </button>
                    <button
                      type="button"
                      onClick={() => setView("signin")}
                      className="w-full rounded-xl border border-white/10 hover:bg-white/5 py-3 text-sm font-semibold text-surface-300 transition-colors"
                    >
                      Back to Log In
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff, GraduationCap as Graduation, LockKeyhole, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";


export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "student"
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student"
  });

  const [error, setError] = useState("");
  const [sucesss, setSucess] = useState(false);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try{
      const {
        email,
        password,
        role 
      } = loginData;

      console.log("Attempting login with:",{email,password, role});

      const response = await axios.post('http://localhost:3001/login',{
        email,
        password,
        role
      },{
        withCredentials: true,
      });
      console.log('Login sucessful:', response.data);
      router.push(`/dashboard/${role}`)
    } catch(err) {
      const error  = err as Error;


      setError('Invalid login credentials');
      console.error('Login failed:', error.message);
      toast({
        title: "Error",
        description: "Email or Password is incorrect",
        variant: "destructive",
      });
    }
    
    
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const {
      name,
      email,
      password,
      confirmPassword,
      role
    } = signupData;

    if (signupData.password !== signupData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
    }

    try {
      console.log("Registering new Student with Data: ",signupData);
      
      const response = await axios.post(
        "http://localhost:3001/register/student",
        {
          fullName: name,
          email,
          password,
          role
        },
        {
          withCredentials: true
        }
      );
      console.log("Responce:", response.data);
      toast({
        title: "Registration Successful",
        description: `Account created for ${signupData.email}. You can now log in.`,
      });
      setSucess(true);
      setError("");  

    } 
    catch (error) {
      const err = error as Error; 

      setError("Error Adding new Student");
      setSucess(false);
      console.error("Error adding student:", err.message);
      alert("Failed to Register Student");
    }
  };

  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2">
            <Graduation className="h-10 w-10 text-primary" />
            <span className="font-bold text-3xl tracking-tight">RTC</span>
          </div>
        </div>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>
                  Enter your credentials to access your dashboard.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleLoginSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="login-email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10"
                        value={loginData.email}
                        onChange={handleLoginChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="login-password">Password</Label>
                    </div>
                    <div className="relative">
                      <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="login-password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-10 pr-10"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span className="sr-only">
                          {showPassword ? "Hide password" : "Show password"}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        id="student-login" 
                        name="role" 
                        value="student"
                        checked={loginData.role === "student"}
                        onChange={handleLoginChange}
                      />
                      <label htmlFor="student-login">Student</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        id="admin-login" 
                        name="role" 
                        value="admin"
                        checked={loginData.role === "admin"}
                        onChange={handleLoginChange}
                      />
                      <label htmlFor="admin-login">Admin</label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                      <Label ></Label>
                      <Link href="#" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>    
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>
                  Sign up to access courses and study materials.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSignupSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input
                      id="signup-name"
                      name="name"
                      placeholder="Enter your full name"
                      value={signupData.name}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={signupData.email}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      name="password"
                      type="password"
                      placeholder="Create a password"
                      value={signupData.password}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                    <Input
                      id="signup-confirm-password"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={signupData.confirmPassword}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        id="student-signup" 
                        name="role" 
                        value="student"
                        checked={signupData.role === "student"}
                        onChange={handleSignupChange}
                      />
                      <label htmlFor="student-signup">Student</label>
                    </div>
                    
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Creating account..." : "Create Account"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
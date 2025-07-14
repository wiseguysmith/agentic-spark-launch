import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Mail,
  Cpu,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Users,
  Settings,
  MessageSquare,
  Target,
  Inbox,
  Workflow,
  ChevronDown,
  Play,
  Star,
  Globe,
  Slack,
  Chrome,
  Database,
  Calendar,
  TrendingUp,
  Shield,
  Sparkles
} from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glassmorphism border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gradient">Agentic Studio</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-foreground/80 hover:text-primary transition-colors">Features</button>
              <button onClick={() => scrollToSection('integrations')} className="text-foreground/80 hover:text-primary transition-colors">Integrations</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-foreground/80 hover:text-primary transition-colors">Docs</button>
              <button onClick={() => scrollToSection('pricing')} className="text-foreground/80 hover:text-primary transition-colors">Pricing</button>
              <Button variant="outline" size="sm">Dashboard</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 gradient-hero" />
        
        <div className={`relative z-10 max-w-6xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h1 className="text-hero mb-6 text-gradient animate-float">
            Build the Minds That Work for You
          </h1>
          <p className="text-xl text-foreground/80 mb-4 max-w-2xl mx-auto">
            Plug. Play. Profit—no dev degree required.
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            The AI-driven marketplace powering the next generation of work. 
            Automate lead generation, streamline workflows, and scale your business with zero-headache setup.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button className="hero-button text-lg px-12 py-6">
              Generate Your First Lead
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="ghost" className="text-primary hover:text-primary-glow transition-colors">
              Join the Beta →
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span>Powered by Digital Ventures</span>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary animate-pulse-glow" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 text-gradient">Rocket-fuel Your Pipeline</h2>
            <p className="text-xl text-muted-foreground">Because time is money (and we save both)</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="feature-card group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Lead Gen Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automate prospect hunts & personalized outreach in seconds. Find high-quality leads while you sleep.
                </p>
              </CardContent>
            </Card>
            
            <Card className="feature-card group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Inbox className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Inbox Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Zero-clog inbox—filter, reply & follow up in one click. Never miss an important message again.
                </p>
              </CardContent>
            </Card>
            
            <Card className="feature-card group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Workflow className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Custom Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Drag & drop your AI workflow—tailored to your biz. Build exactly what you need, no coding required.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 text-gradient">How It Works</h2>
            <p className="text-xl text-muted-foreground">Four steps to AI-powered success</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Sign up in 5 seconds", desc: "Quick onboarding, no credit card required", icon: Zap },
              { step: 2, title: "Pick your agent", desc: "Choose from our pre-built AI agents", icon: Cpu },
              { step: 3, title: "Connect in one click", desc: "Integrate with your existing tools", icon: Settings },
              { step: 4, title: "Watch leads roll in", desc: "Sit back and let AI do the work", icon: TrendingUp }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-glow rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-12 w-6 h-6 text-primary/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 text-gradient">Seamless Integrations</h2>
            <p className="text-xl text-muted-foreground">Connect with tools you already love</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {[
              { name: "Gmail", icon: Mail, color: "text-red-500" },
              { name: "LinkedIn", icon: Users, color: "text-blue-600" },
              { name: "Slack", icon: Slack, color: "text-purple-500" },
              { name: "Notion", icon: Database, color: "text-gray-400" },
              { name: "Google Sheets", icon: BarChart3, color: "text-green-500" }
            ].map((integration, index) => (
              <Card key={index} className="feature-card p-6 text-center group hover:scale-105 transition-transform">
                <integration.icon className={`w-8 h-8 mx-auto mb-3 ${integration.color} group-hover:scale-110 transition-transform`} />
                <p className="font-medium">{integration.name}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Badge variant="secondary" className="text-primary">
              <Sparkles className="w-4 h-4 mr-2" />
              More integrations coming soon...
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section mb-4 text-gradient">Early Access Pricing</h2>
          <p className="text-xl text-muted-foreground mb-12">Limited time lifetime deal</p>
          
          <Card className="feature-card max-w-lg mx-auto">
            <CardHeader>
              <div className="text-center">
                <Badge className="mb-4">Limited Time</Badge>
                <CardTitle className="text-3xl mb-2">$199</CardTitle>
                <p className="text-muted-foreground">Lifetime Access</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                "Unlimited AI agents",
                "All integrations included",
                "Priority support",
                "Beta feature access",
                "No monthly fees ever"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
              <Button className="w-full hero-button mt-8">
                Lock In Your Spot
                <Star className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 text-gradient">Your Command Center</h2>
            <p className="text-xl text-muted-foreground">Real-time insights for all things Agentic</p>
          </div>
          
          <Card className="feature-card p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">127</div>
                <p className="text-muted-foreground">Leads Generated Today</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">98%</div>
                <p className="text-muted-foreground">Agent Health Score</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">$12.4K</div>
                <p className="text-muted-foreground">Revenue This Month</p>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Recent Activity</h3>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              <div className="space-y-3">
                {[
                  "Lead Gen Agent found 23 new prospects",
                  "Inbox Agent replied to 12 inquiries",
                  "Custom workflow generated 5 proposals"
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section mb-4 text-gradient">What's Next</h2>
            <p className="text-xl text-muted-foreground">Exciting features on the horizon</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Advanced Analytics", 
                desc: "Deep insights into your AI agents' performance with custom reporting",
                icon: BarChart3,
                timeline: "Q4 '25"
              },
              { 
                title: "Team Workspaces", 
                desc: "Collaborate with your team and share AI agents across departments",
                icon: Users,
                timeline: "Q4 '25"
              },
              { 
                title: "API Access", 
                desc: "Build custom integrations and extend Agentic Studio's capabilities",
                icon: Globe,
                timeline: "Q4 '25"
              }
            ].map((feature, index) => (
              <Card key={index} className="feature-card text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <span>{feature.title}</span>
                    <Badge variant="outline" className="text-xs">{feature.timeline}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Cpu className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-gradient">Agentic Studio</span>
          </div>
          <p className="text-muted-foreground mb-4">Powering the Next Generation of Work</p>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span>© 2024 Digital Ventures. All rights reserved.</span>
          </div>
        </div>
      </footer>

      {/* Support Chat Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="w-14 h-14 rounded-full hero-button p-0 animate-pulse-glow">
          <MessageSquare className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;

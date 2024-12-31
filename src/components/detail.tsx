import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";

export function Detail() {
  return (
    <Tabs defaultValue="education" className="w-full p-4 bg-white shadow-lg rounded-lg border border-gray-200">
      
      {/* Tabs Trigger List */}
      <TabsList className="grid w-full grid-cols-5">
        
        {/* Education Tab */}
        <TabsTrigger 
          value="education" 
          className="p-3 font-semibold text-center rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors duration-200"
        >
          Education
        </TabsTrigger>

        {/* Experience Tab */}
        <TabsTrigger 
          value="experience" 
          className="p-3 font-semibold text-center rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors duration-200"
        >
          Work Experience
        </TabsTrigger>

        {/* Skills Tab */}
        <TabsTrigger 
          value="skills" 
          className="p-3 font-semibold text-center rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors duration-200"
        >
          Skills
        </TabsTrigger>

        {/* Projects Tab */}
        <TabsTrigger 
          value="projects" 
          className="p-3 font-semibold text-center rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors duration-200"
        >
          Projects
        </TabsTrigger>

      {/* contact tab */}
      <TabsTrigger 
          value="contact" 
          className="p-3 font-semibold text-center rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors duration-200"
        >
          Contact
        </TabsTrigger>
      </TabsList>

      {/* Tabs Content */}
      
      {/* Education Content */}
      <TabsContent value="education" className="mt-4 p-6 bg-indigo-50 rounded-lg shadow-md">
        <Education />
      </TabsContent>

      {/* Experience Content */}
      <TabsContent value="experience" className="mt-4 p-6 bg-indigo-50 rounded-lg shadow-md">
        <Experience />
      </TabsContent>

      {/* Skills Content */}
      <TabsContent value="skills" className="mt-4 p-6 bg-indigo-50 rounded-lg shadow-md">
        <Skills />
      </TabsContent>

      {/* Projects Content */}
      <TabsContent value="projects" className="mt-4 p-6 bg-indigo-50 rounded-lg shadow-md">
        <Projects />
      </TabsContent>
      {/* contact */}
      <TabsContent value="contact" className="mt-4 p-6 bg-indigo-50 rounded-lg shadow-md">
        <Contact />
      </TabsContent>
    </Tabs>
  );
}

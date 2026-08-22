import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const generateAndDownloadResume = async (): Promise<void> => {
  // Create an off-screen container matching the exact uploaded LaTeX resume layout and typography
  const container = document.createElement('div');
  container.id = 'exact-resume-pdf-container';
  container.style.position = 'fixed';
  container.style.left = '-9999px';
  container.style.top = '0';
  container.style.width = '794px'; // 210mm at 96 DPI
  container.style.minHeight = '1123px'; // 297mm A4 at 96 DPI
  container.style.height = '1123px';
  container.style.backgroundColor = '#ffffff';
  container.style.color = '#000000';
  container.style.padding = '42px 48px 42px 48px';
  container.style.fontFamily = '"Times New Roman", Times, "Latin Modern Roman", "Computer Modern Roman", serif';
  container.style.boxSizing = 'border-box';
  container.style.lineHeight = '1.34';
  container.style.zIndex = '-9999';

  container.innerHTML = `
    <div style="width: 100%; height: 100%; box-sizing: border-box; background: #ffffff; color: #000000; font-family: 'Times New Roman', Times, serif;">
      
      <!-- Top Center Header -->
      <div style="text-align: center; margin-bottom: 14px;">
        <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 0.08em; color: #000000; text-transform: uppercase; line-height: 1.2;">
          KABILAN P
        </h1>
        <div style="margin-top: 4px; font-size: 11px; color: #000000; word-spacing: 1.5px;">
          +91 8072236596 &nbsp;|&nbsp; kabilroyitofficial@gmail.com &nbsp;|&nbsp; linkedin.com/in/kabilan-p &nbsp;|&nbsp; github.com/Kabilroy
        </div>
      </div>

      <!-- Professional Summary -->
      <div style="margin-bottom: 14px;">
        <div style="font-size: 13.5px; font-weight: 700; color: #000000; border-bottom: 1px solid #000000; padding-bottom: 1px; margin-bottom: 5px;">
          Professional Summary
        </div>
        <div style="font-size: 10.5px; line-height: 1.42; text-align: justify; color: #000000;">
          Pre-final year B.Tech Information Technology student with strong foundations in Java and web development. Hands-on experience building Java based applications using object-oriented principles, input validation, and responsive design. Strong interest in writing clean, maintainable code and applying software development best practices. Comfortable using Git and GitHub for version control and collaboration.Actively seeking software development or full-stack internship opportunities.
        </div>
      </div>

      <!-- Technical Skills -->
      <div style="margin-bottom: 14px;">
        <div style="font-size: 13.5px; font-weight: 700; color: #000000; border-bottom: 1px solid #000000; padding-bottom: 1px; margin-bottom: 5px;">
          Technical Skills
        </div>
        <div style="font-size: 10.5px; line-height: 1.48; color: #000000;">
          <div style="margin-bottom: 1.5px;"><strong style="font-weight: 700;">Languages:</strong> Java, SQL, C#</div>
          <div style="margin-bottom: 1.5px;"><strong style="font-weight: 700;">Frontend:</strong> HTML5, CSS3, JavaScript, React.js</div>
          <div style="margin-bottom: 1.5px;"><strong style="font-weight: 700;">Backend:</strong> Spring Boot</div>
          <div style="margin-bottom: 1.5px;"><strong style="font-weight: 700;">Core CS:</strong> Data Structures and Algorithms, Object-Oriented Programming (OOP)</div>
          <div style="margin-bottom: 1.5px;"><strong style="font-weight: 700;">Tools:</strong> Git, GitHub, VS Code, IntelliJ IDEA</div>
        </div>
      </div>

      <!-- Projects -->
      <div style="margin-bottom: 14px;">
        <div style="font-size: 13.5px; font-weight: 700; color: #000000; border-bottom: 1px solid #000000; padding-bottom: 1px; margin-bottom: 6px;">
          Projects
        </div>

        <!-- Project 1: AI-Powered Budget Tracker -->
        <div style="margin-bottom: 9px;">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <div style="font-size: 11.5px; font-weight: 700; color: #000000;">AI-Powered Budget Tracker</div>
            <div style="font-size: 10.5px; color: #000000;">2026</div>
          </div>
          <div style="font-size: 10.5px; font-style: italic; color: #000000; margin-bottom: 3px;">
            Full-Stack Web Application — React, Spring Boot, MySQL, JWT, REST APIs
          </div>
          <div style="padding-left: 10px; font-size: 10px; line-height: 1.42; color: #000000;">
            <div style="position: relative; padding-left: 12px; margin-bottom: 1.5px;">
              <span style="position: absolute; left: 0; top: 0;">•</span> Developed a full-stack personal finance management application to track income, expenses, budgets, and financial transactions.
            </div>
            <div style="position: relative; padding-left: 12px; margin-bottom: 1.5px;">
              <span style="position: absolute; left: 0; top: 0;">•</span> Implemented secure JWT-based authentication and authorization with RESTful APIs using Spring Boot and Spring Security.
            </div>
            <div style="position: relative; padding-left: 12px; margin-bottom: 1.5px;">
              <span style="position: absolute; left: 0; top: 0;">•</span> Integrated AI-powered financial insights and data import features to provide personalized expense analysis and improve user decision-making.
            </div>
            <div style="position: relative; padding-left: 12px; margin-bottom: 1.5px;">
              <span style="position: absolute; left: 0; top: 0;">•</span> Designed a modular architecture with React frontend, Spring Boot backend, and MySQL database to ensure scalability, maintainability, and reliable performance.
            </div>
          </div>
        </div>

        <!-- Project 2: Smart Government Scheme Awareness Application -->
        <div style="margin-bottom: 2px;">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <div style="font-size: 11.5px; font-weight: 700; color: #000000;">Smart Government Scheme Awareness Application</div>
            <div style="font-size: 10.5px; color: #000000;">2025</div>
          </div>
          <div style="font-size: 10.5px; font-style: italic; color: #000000; margin-bottom: 3px;">
            Web Application — TypeScript, HTML, CSS, Responsive Design
          </div>
          <div style="padding-left: 10px; font-size: 10px; line-height: 1.42; color: #000000;">
            <div style="position: relative; padding-left: 12px; margin-bottom: 1.5px;">
              <span style="position: absolute; left: 0; top: 0;">•</span> Developed a web-based platform to increase citizen awareness of government welfare schemes and eligibility information.
            </div>
            <div style="position: relative; padding-left: 12px; margin-bottom: 1.5px;">
              <span style="position: absolute; left: 0; top: 0;">•</span> Implemented type-safe development using TypeScript to improve code quality, maintainability, and reduce runtime errors.
            </div>
            <div style="position: relative; padding-left: 12px; margin-bottom: 1.5px;">
              <span style="position: absolute; left: 0; top: 0;">•</span> Built a responsive user interface using HTML and CSS to ensure seamless performance across mobile, tablet, and desktop devices.
            </div>
            <div style="position: relative; padding-left: 12px; margin-bottom: 1.5px;">
              <span style="position: absolute; left: 0; top: 0;">•</span> Utilized Git and GitHub for version control, collaborative development, and efficient project management.
            </div>
            <div style="position: relative; padding-left: 12px; margin-bottom: 1.5px;">
              <span style="position: absolute; left: 0; top: 0;">•</span> Designed a clean and intuitive interface to enhance accessibility, navigation, and overall user experience.
            </div>
          </div>
        </div>
      </div>

      <!-- Internship -->
      <div style="margin-bottom: 14px;">
        <div style="font-size: 13.5px; font-weight: 700; color: #000000; border-bottom: 1px solid #000000; padding-bottom: 1px; margin-bottom: 5px;">
          Internship
        </div>
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <div style="font-size: 11.5px; font-weight: 700; color: #000000;">Spring Boot &nbsp;Java Intern – Infosys</div>
          <div style="font-size: 10.5px; color: #000000;">2026</div>
        </div>
        <div style="font-size: 10.5px; font-style: italic; color: #000000;">
          Internship — Java, Spring Boot, REST APIs, MySQL
        </div>
      </div>

      <!-- Education -->
      <div style="margin-bottom: 14px;">
        <div style="font-size: 13.5px; font-weight: 700; color: #000000; border-bottom: 1px solid #000000; padding-bottom: 1px; margin-bottom: 5px;">
          Education
        </div>

        <div style="margin-bottom: 6px;">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <div style="font-size: 11.5px; font-weight: 700; color: #000000;">V.S.B Engineering College, Karur</div>
            <div style="font-size: 10.5px; color: #000000;">2023 – 2027</div>
          </div>
          <div style="font-size: 10.5px; font-style: italic; color: #000000;">
            B.Tech Information Technology, CGPA – 8.34/10
          </div>
        </div>

        <div>
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <div style="font-size: 11.5px; font-weight: 700; color: #000000;">Arasu Nagar Matriculation Higher Secondary School, Ariyalur (State Board)</div>
            <div style="font-size: 10.5px; color: #000000;">2022</div>
          </div>
          <div style="font-size: 10.5px; font-style: italic; color: #000000;">
            12th Standard – 91%
          </div>
        </div>
      </div>

      <!-- Certifications -->
      <div style="margin-bottom: 4px;">
        <div style="font-size: 13.5px; font-weight: 700; color: #000000; border-bottom: 1px solid #000000; padding-bottom: 1px; margin-bottom: 5px;">
          Certifications
        </div>
        <div style="padding-left: 10px; font-size: 10.5px; line-height: 1.45; color: #000000;">
          <div style="position: relative; padding-left: 12px; margin-bottom: 1.5px;">
            <span style="position: absolute; left: 0; top: 0;">•</span> Programming in Java – Ministry of Education, Government of India
          </div>
          <div style="position: relative; padding-left: 12px; margin-bottom: 1.5px;">
            <span style="position: absolute; left: 0; top: 0;">•</span> Java Foundation Certificate – Infosys Springboard (2025)
          </div>
          <div style="position: relative; padding-left: 12px; margin-bottom: 1.5px;">
            <span style="position: absolute; left: 0; top: 0;">•</span> programming in java -NPTEL
          </div>
        </div>
      </div>

    </div>
  `;

  document.body.appendChild(container);

  try {
    const canvas = await html2canvas(container, {
      scale: 3, // 300 DPI high definition capture
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: 794,
    });

    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
    pdf.save('KABILAN_P_RESUME.pdf');
  } catch (error) {
    console.error('Error generating exact resume PDF:', error);
  } finally {
    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
  }
};

'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* 顶部导航栏 */}
      <nav className="bg-white shadow-lg fixed w-full z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-800">Shengyang (Shawn) Dong</div>
            <div className="flex space-x-4">
              <a href="#about" className="text-gray-600 hover:text-gray-900">关于我</a>
              <a href="#education" className="text-gray-600 hover:text-gray-900">教育背景</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900">工作经验</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">项目经历</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">技术特长</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">联系方式</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 个人简介部分 */}
      <section id="about" className="pt-24 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Shengyang (Shawn) Dong</h1>
            <p className="text-xl text-gray-600 mb-8">Data Scientist / Full Stack Developer</p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              专注于AI和数据科学的全栈开发者，在保险行业知识图谱构建、智能建筑环境控制等领域有丰富经验。
              擅长运用机器学习和深度学习技术解决实际问题，具有强大的技术栈和项目实践经验。
            </p>
          </div>
        </div>
      </section>

      {/* 教育背景部分 */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">教育背景</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900">Drexel University</h3>
            <p className="text-xl text-gray-600">B.S in Data Science / Minor in Computer Science</p>
            <p className="text-lg text-gray-600">GPA: 3.89 | 预计毕业时间：2026</p>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-800">荣誉与活动</h4>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>A.J. Drexel Scholarship 2023-2025</li>
                <li>Second Place Provincial Award in the Chinese Data Modeling Competition 2023</li>
                <li>Philly Codefest 2024 参与者</li>
                <li>Drexel Data Science Club 成员</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 工作经验部分 */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">工作经验</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AI Data Scientist Co-op</h3>
                  <p className="text-gray-600">Resolution Life | Philadelphia, PA</p>
                </div>
                <p className="text-gray-600">Aug. 2024 – Mar. 2025</p>
              </div>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>参与设计基于GPT-4和Neo4j的保险政策解释知识图谱，帮助提取和组织1,000+政策概念</li>
                <li>开发基于嵌入的语义搜索系统，实现82%召回率和76%精确率的条款级查询</li>
                <li>使用AWS Glue处理S3上的保险数据集，实现数据清洗和结构化</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Research Assistant</h3>
                  <p className="text-gray-600">Drexel University | Philadelphia, PA</p>
                </div>
                <p className="text-gray-600">Jan. 2024 – June. 2024</p>
              </div>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>利用Meta LLaMA 3.2多模态模型处理建筑传感器数据，实现91%准确率的知识提取</li>
                <li>开发RNN-LSTM模型进行温度和湿度预测，达到85%的预测准确率</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 项目经历部分 */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">项目经历</h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-900">Smart Waste Sorting System</h3>
                <p className="text-gray-600">Mar. 2024 – Apr. 2024</p>
              </div>
              <ul className="mt-4 list-disc list-inside text-gray-600">
                <li>使用OpenCV进行废物图像预处理，提高不同光照条件下的检测质量</li>
                <li>集成YOLOv5模型实现实时可回收物品分类</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-900">AI JobMatch – 智能职位推荐系统</h3>
                <p className="text-gray-600">Jan. 2025 – Mar. 2025</p>
              </div>
              <ul className="mt-4 list-disc list-inside text-gray-600">
                <li>处理130万+LinkedIn岗位数据，进行技能提取和职位分析</li>
                <li>结合TF-IDF和余弦相似度构建可解释的推荐系统</li>
                <li>使用Flask和Streamlit开发交互式前端界面</li>
                <li>集成BERT模型实现语义检索功能</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 技术特长部分 */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">技术特长</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">编程语言</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Python, R, Java</li>
                <li>TypeScript, JavaScript (ES6+)</li>
                <li>HTML/CSS, SQL</li>
                <li>MATLAB, Bash, LaTeX</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">框架与平台</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Flask, Express, React, Next.js</li>
                <li>Node.js, REST API</li>
                <li>AWS, GCP, Databricks</li>
                <li>Spark, Tailwind CSS</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">工具与库</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Pandas, NumPy, Scikit-learn</li>
                <li>PySpark, Matplotlib</li>
                <li>d3.js, Tableau</li>
                <li>Git, Docker, Web Scraping</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 联系方式部分 */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">联系方式</h2>
          <div className="text-center space-y-4">
            <p className="text-gray-600">邮箱：sd3666@drexel.edu</p>
            <p className="text-gray-600">电话：+1-215-391-7631</p>
            <p className="text-gray-600">LinkedIn：<a href="https://www.linkedin.com/in/your-profile" className="text-blue-600 hover:text-blue-800">Shengyang (Shawn) Dong</a></p>
          </div>
        </div>
      </section>
    </main>
  )
}
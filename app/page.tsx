'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaBars, FaBriefcase, FaCalendarAlt, FaCertificate, FaCheck, FaCheckCircle, FaCircle, FaEnvelope, FaGraduationCap, FaInfoCircle, FaLanguage, FaLinkedin, FaMapMarkerAlt, FaPhone, FaStar, FaTimes, FaUniversity, FaUsers } from 'react-icons/fa';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="antialiased bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              MD NUR ISLAM
            </a>
            <div className="hidden md:flex items-center gap-1">
              <a href="#about" className="px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition-all duration-300 rounded-xl hover:bg-green-50">About</a>
              <a href="#education" className="px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition-all duration-300 rounded-xl hover:bg-green-50">Education</a>
              <a href="#experience" className="px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition-all duration-300 rounded-xl hover:bg-green-50">Experience</a>
              <a href="#skills" className="px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition-all duration-300 rounded-xl hover:bg-green-50">Skills</a>
              <a href="#contact" className="px-4 py-2 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300">Contact</a>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700">
              {mobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 space-y-2">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-xl">About</a>
              <a href="#education" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-xl">Education</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-xl">Experience</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-xl">Skills</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl text-center">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen overflow-hidden pt-16">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-green-700 font-semibold text-sm mb-4">
                <FaCircle className="inline text-xs mr-2 animate-pulse" />Available for Opportunities
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hello, I&apos;m <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">MD NUR ISLAM</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-medium">
                Operations Officer | Aspiring HR Strategist
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                A Bachelor of Business Administration (HRM) graduate with expertise in operations, project management, and business development. Passionate about organizational behavior and strategic HRM, I am seeking Master&apos;s degree opportunities to advance research in workplace diversity, cross-cultural environments, and HR analytics.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="mailto:nurislamsub@gmail.com" className="group relative px-8 py-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center gap-3 overflow-hidden">
                  <FaEnvelope />
                  <span>Email Me</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/in/nur1slam/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-green-600 text-green-700 hover:bg-green-50 font-bold text-lg rounded-xl transition-all duration-300 flex items-center gap-3">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                  <Image src="/profile.png"
                    alt="Profile"
                    width={500}
                    height={500}
                    className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square border-4 border-white group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full"></div>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    I am Nur Islam, an Operations Officer at VFS Global and a proud BBA graduate in Human Resource Management from Stamford University Bangladesh (GPA: 3.57/4.00). I bring strong expertise in operational efficiency, customer service, and strategic cross-functional collaboration.
                  </p>
                  <p>
                    My background spans across leading visa processing operations to driving enterprise ERP business development. Through this hands-on experience and my academic training, I have developed a keen interest in HR analytics and talent development.
                  </p>
                  <p>
                    <strong>Objective:</strong> I am actively seeking Master&apos;s degree opportunities at internationally recognized universities. I aim to advance my expertise in organizational behavior, strategic HRM, and workplace diversity & inclusion, applying data-driven research to solve complex cross-cultural challenges.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-100">
                    <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                      <FaInfoCircle /> Quick Facts
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <FaMapMarkerAlt className="text-green-600 text-sm" />
                        </div>
                        <span className="text-sm">Dhaka, Bangladesh</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <FaGraduationCap className="text-green-600 text-sm" />
                        </div>
                        <span className="text-sm">BBA in HRM</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <FaBriefcase className="text-green-600 text-sm" />
                        </div>
                        <span className="text-sm">3+ Years Experience</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <FaStar className="text-green-600 text-sm" />
                        </div>
                        <span className="text-sm">Active Volunteer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Education</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border-2 border-blue-100 p-6 hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaUniversity className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor of Business Administration (HRM)</h3>
                    <p className="text-blue-600 font-semibold text-lg mb-1">Stamford University Bangladesh</p>
                    <p className="text-gray-600 mb-3">Dhaka, Bangladesh | December 2021 | CGPA: 3.57/4.00</p>
                    <p className="text-gray-700"><strong>Relevant Courses (A & A+):</strong> Industrial Relations, Human Resource Management, International Management, Training & Development, Organizational Change & Development, Financial Accounting, Management Accounting, Business Communication</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:scale-[1.02] transition-all duration-300 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Higher Secondary School Certificate (Business Studies)</h3>
                <p className="text-indigo-600 font-semibold mb-1">Government Yasin College Faridpur</p>
                <p className="text-gray-600">Faridpur, Bangladesh | August 2013 | GPA: 3.40/5.00</p>
              </div>
              <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:scale-[1.02] transition-all duration-300 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Secondary School Certificate (Business Studies)</h3>
                <p className="text-indigo-600 font-semibold mb-1">Laskardia Atiqur Rahman High School</p>
                <p className="text-gray-600">Faridpur, Bangladesh | May 2011 | GPA: 4.44/5.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Professional Experience</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-4 border-green-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow"></div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop"
                      alt="VFS Global"
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-xl object-cover" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Operations Officer</h3>
                      <p className="text-green-600 font-semibold text-lg">VFS Global Bangladesh Pvt. Ltd.</p>
                      <p className="text-gray-600"><FaCalendarAlt className="inline mr-2" />February 2023 - Present</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaCheck className="text-green-600 text-xs" />
                      </div>
                      <span>Manage daily operations, setting goals, optimizing resource allocation, and leading teams to ensure efficient service delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaCheck className="text-green-600 text-xs" />
                      </div>
                      <span>Successfully handled customer complaints, coordinated with stakeholders, and implemented strategic initiatives</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaCheck className="text-green-600 text-xs" />
                      </div>
                      <span>Expertise in administrative tasks, vendor management, and customer service</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8 border-l-4 border-blue-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow"></div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop"
                      alt="Access Telecom"
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-xl object-cover" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Executive Business Development, ERP</h3>
                      <p className="text-blue-600 font-semibold text-lg">Access Telecom (BD) Ltd.</p>
                      <p className="text-gray-600"><FaCalendarAlt className="inline mr-2" />April 2022 - January 2023</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaCheck className="text-blue-600 text-xs" />
                      </div>
                      <span>Engaged with clients and offered pre-sales technical support for ERP solutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaCheck className="text-blue-600 text-xs" />
                      </div>
                      <span>Collaborated on tailored proposals and conducted market research</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8 border-l-4 border-purple-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow"></div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <Image src="https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=100&h=100&fit=crop"
                      alt="Sonali Bank"
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-xl object-cover" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Internship</h3>
                      <p className="text-purple-600 font-semibold text-lg">Sonali Bank Limited</p>
                      <p className="text-gray-600"><FaCalendarAlt className="inline mr-2" />November 2021 - January 2022</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaCheck className="text-purple-600 text-xs" />
                      </div>
                      <span>Assisted clients with account openings and banking operations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Involvement Section */}
      <section id="involvement" className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Involvement & Volunteering</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-6">
              
              <div className="bg-white rounded-2xl border border-orange-100 p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaUsers className="text-orange-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Member</h3>
                    <p className="text-orange-600 font-semibold">Ora Agaro Jon Cooperative Society</p>
                    <p className="text-gray-500 text-sm mb-3">Faridpur, Bangladesh | June 2021 - Present</p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                      <li>Collaborated with 16 members to support community growth through savings programs, skill development workshops, and community projects.</li>
                      <li>Contributed to sustainable development initiatives that drove positive change for underprivileged communities.</li>
                      <li>Demonstrated teamwork and shared responsibility in delivering cooperative society programs over 4+ years.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-amber-100 p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaBriefcase className="text-amber-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Member</h3>
                    <p className="text-amber-600 font-semibold">Stamford University Business Forum</p>
                    <p className="text-gray-500 text-sm mb-3">Dhaka, Bangladesh | May 2017 - Present</p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                      <li>Organized and participated in 90+ monthly events over 8 years, including guest lectures, workshops, and networking sessions held at universities and businesses across Dhaka.</li>
                      <li>Enhanced leadership, communication, and business acumen through active engagement with 50+ business professionals and academic leaders.</li>
                      <li>Facilitated 20+ collaboration and innovation initiatives to achieve organizational goals and strengthen university-business partnerships.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-yellow-200 p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheckCircle className="text-yellow-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Volunteer Member</h3>
                    <p className="text-yellow-600 font-semibold">Bismay Foundation</p>
                    <p className="text-gray-500 text-sm mb-3">Shyamoli, Mohammadpur, Bangladesh | April 2022 - October 2023</p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                      <li>Supported 50+ underprivileged children in rural areas by providing essential supplies including clean water, stationery, and educational materials.</li>
                      <li>Assisted in organizing 26 medical camps and arranging nutritious meals for children in underserved communities.</li>
                      <li>Strengthened organizational and teamwork skills while working collectively with volunteer team to deliver community service initiatives.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <FaUsers className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold rounded-full">Leadership</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold rounded-full">Communication</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold rounded-full">Teamwork</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold rounded-full">Problem Solving</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold rounded-full">Negotiation</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold rounded-full">Customer Service</span>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <FaCertificate className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Certifications</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex flex-col gap-1">
                    <div className="flex items-start gap-2"><FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" /><span className="font-semibold">Relationship Mgmt & Business Development</span></div>
                    <span className="text-xs text-gray-500 ml-6">Starweaver &bull; 2025</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <div className="flex items-start gap-2"><FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" /><span className="font-semibold">Project Management: Foundations</span></div>
                    <span className="text-xs text-gray-500 ml-6">University of Colorado &bull; 10/2024</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <div className="flex items-start gap-2"><FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" /><span className="font-semibold">Employee Relations</span></div>
                    <span className="text-xs text-gray-500 ml-6">HRCI &bull; 08/2024</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <div className="flex items-start gap-2"><FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" /><span className="font-semibold">Learning and Development</span></div>
                    <span className="text-xs text-gray-500 ml-6">HRCI &bull; 05/2024</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <div className="flex items-start gap-2"><FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" /><span className="font-semibold">Talent Acquisition</span></div>
                    <span className="text-xs text-gray-500 ml-6">HRCI &bull; 02/2024</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <div className="flex items-start gap-2"><FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" /><span className="font-semibold">Human Resources Analytics</span></div>
                    <span className="text-xs text-gray-500 ml-6">UC Irvine &bull; 05/2023</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <div className="flex items-start gap-2"><FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" /><span className="font-semibold">Preparing to Manage Human Resources</span></div>
                    <span className="text-xs text-gray-500 ml-6">University of Minnesota &bull; 05/2023</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <FaLanguage className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Languages</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="font-semibold">English</span>
                      <span className="text-gray-600">Professional</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="font-semibold">Bengali</span>
                      <span className="text-gray-600">Native</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="font-semibold">Hindi</span>
                      <span className="text-gray-600">Conversational</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="font-semibold">Urdu</span>
                      <span className="text-gray-600">Conversational</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="references" className="relative py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">References</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-teal-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Md. Golam Rabbani</h3>
                <p className="text-teal-600 font-semibold text-sm mb-4">Assistant Professor &bull; Stamford University Bangladesh</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center gap-2"><FaEnvelope className="text-teal-500" /> <a href="mailto:mgrabbani@stamforduniversity.edu.bd" className="hover:text-teal-700 transition">mgrabbani@stamforduniversity.edu.bd</a></p>
                  <p className="flex items-center gap-2"><FaPhone className="text-teal-500" /> +8801711575142</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-emerald-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Mohammed Jaynal Abedin</h3>
                <p className="text-emerald-600 font-semibold text-sm mb-4">Associate Professor &bull; Stamford University Bangladesh</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center gap-2"><FaEnvelope className="text-emerald-500" /> <a href="mailto:abedin1994@stamforduniversity.edu.bd" className="hover:text-emerald-700 transition">abedin1994@stamforduniversity.edu.bd</a></p>
                  <p className="flex items-center gap-2"><FaPhone className="text-emerald-500" /> +8801790605606</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 lg:py-32">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full mb-4"></div>
                <p className="text-lg text-gray-600">I&apos;m always open to new opportunities and collaborations</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-100 hover:scale-105 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaEnvelope className="text-green-600 text-2xl" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                  <a href="mailto:nurislamsub@gmail.com" className="text-green-600 hover:underline text-sm break-all">nurislamsub@gmail.com</a>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-100 hover:scale-105 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaPhone className="text-blue-600 text-2xl" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                  <p className="text-blue-600 text-sm">+8801715987336</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-100 hover:scale-105 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaLinkedin className="text-purple-600 text-2xl" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">LinkedIn</h3>
                  <a href="https://linkedin.com/in/nur1slam" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline text-sm">linkedin.com/in/nur1slam</a>
                </div>
              </div>
              <div className="mt-8 p-5 bg-gray-50 rounded-2xl text-center">
                <p className="text-gray-700 flex items-center justify-center gap-2">
                  <FaMapMarkerAlt className="text-green-600" />
                  <span className="text-sm">357/12/A/C, Modhubag, Hatirjheel, Dhaka-1217, Bangladesh</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">MD NUR ISLAM</h3>
                <p className="text-gray-400">Operations Officer | Business Development Professional</p>
              </div>
              <div className="flex gap-4">
                <a href="mailto:nurislamsub@gmail.com" className="w-12 h-12 bg-gray-800 hover:bg-green-600 rounded-xl flex items-center justify-center transition-all duration-300">
                  <FaEnvelope />
                </a>
                <a href="https://www.linkedin.com/in/nur1slam/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300">
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2024 MD NUR ISLAM. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

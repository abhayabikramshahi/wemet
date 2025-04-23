import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion"; // optional, remove if not using

const EditProfile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "John Doe",
    username: "johndoe",
    website: "",
    bio: "I love building user-friendly applications ✨",
    email: "john@example.com",
    phone: "+1234567890",
    gender: "Prefer not to say",
    location: "",
    occupation: "",
    about: "",
    education: {
      degree: "",
      school: "",
      year: ""
    },
    experience: {
      title: "",
      company: "",
      period: ""
    },
    skills: []
  });

  const [profileImage, setProfileImage] = useState(null);
  const [newSkill, setNewSkill] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      education: {
        ...prev.education,
        [name]: value
      }
    }));
  };

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      experience: {
        ...prev.experience,
        [name]: value
      }
    }));
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill)
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/app/profile");
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white pb-10 px-4 md:px-10 pt-10"
    >
      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Profile Picture */}
        <div className="flex items-center space-x-6">
          <div className="relative w-24 h-24">
            <img
              src={profileImage || "https://via.placeholder.com/150?text=Profile"}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border border-[#cccccc] shadow-sm"
            />
            <label className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <span className="text-xs text-gray-600">📷</span>
            </label>
          </div>
          <div>
            <h2 className="text-xl font-semibold">{formData.name}</h2>
            <p className="text-gray-500">@{formData.username}</p>
          </div>
        </div>

        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Name", name: "name" },
            { label: "Username", name: "username" },
            { label: "Email", name: "email", type: "email" },
            { label: "Phone", name: "phone", type: "tel" },
            { label: "Gender", name: "gender", type: "select" },
            { label: "Website", name: "website", type: "url" },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label className="block text-sm font-medium mb-1">{label}</label>
              {type === "select" ? (
                <select
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="w-full border border-[#cccccc] rounded-xl px-4 py-2 transition-all duration-300 focus:ring-2 focus:ring-black"
                >
                  <option>Prefer not to say</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Custom</option>
                </select>
              ) : (
                <input
                  type={type || "text"}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="w-full border border-[#cccccc] rounded-xl px-4 py-2 transition-all duration-300 focus:ring-2 focus:ring-black"
                />
              )}
            </div>
          ))}
        </div>

        {/* Location & Occupation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Location</label>
            <MapPin className="absolute left-3 top-10 text-gray-400" size={20} />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border border-[#cccccc] rounded-xl transition-all duration-300 focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Occupation</label>
            <Briefcase className="absolute left-3 top-10 text-gray-400" size={20} />
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border border-[#cccccc] rounded-xl transition-all duration-300 focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        {/* About */}
        <div>
          <label className="block text-sm font-medium mb-1">About Me</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            rows={4}
            className="w-full border border-[#cccccc] rounded-xl px-4 py-2 transition-all duration-300 focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Education */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["degree", "school", "year"].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData.education[field]}
                onChange={handleEducationChange}
                className="border border-[#cccccc] rounded-xl px-4 py-2 transition-all duration-300 focus:ring-2 focus:ring-black"
              />
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["title", "company", "period"].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData.experience[field]}
                onChange={handleExperienceChange}
                className="border border-[#cccccc] rounded-xl px-4 py-2 transition-all duration-300 focus:ring-2 focus:ring-black"
              />
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {formData.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 px-3 py-1 rounded-full flex items-center text-sm border border-[#cccccc]"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(skill)}
                  className="ml-2 text-red-500"
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
          <form onSubmit={handleAddSkill} className="flex gap-2">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Add a skill"
              className="flex-1 border border-[#cccccc] rounded-xl px-4 py-2 transition-all duration-300 focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-full hover:bg-white hover:text-black border border-black transition-all duration-300"
            >
              Add
            </button>
          </form>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate("/app/profile")}
            className="px-6 py-2 border border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white rounded-full hover:bg-white hover:text-black border border-black transition-all duration-300"
          >
            Save Changes
          </button>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="text-green-600 font-semibold mt-4">
            Profile updated successfully!
          </div>
        )}
      </form>
    </motion.div>
  );
};

export default EditProfile;

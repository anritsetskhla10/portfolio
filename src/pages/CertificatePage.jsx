import Certificate from "../components/Certificate";
import Education from "../components/Education";
import GithubTrophies from "../components/GithubTrophies";

const CertificatePage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-2 px-8">
      <Certificate />
      <Education />
      <GithubTrophies />
    </div>
  );
};

export default CertificatePage;

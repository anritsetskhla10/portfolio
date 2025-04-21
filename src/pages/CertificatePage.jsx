import Certificate from "../components/Certificate";
import GithubTrophies from "../components/GithubTrophies";

const CertificatePage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-2 px-8">
      <Certificate />
      <GithubTrophies/>
    </div>
  );
};

export default CertificatePage;

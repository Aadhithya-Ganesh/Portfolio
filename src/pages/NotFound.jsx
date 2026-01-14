import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-gradient mb-4 text-6xl font-bold">404</h1>
        <p className="text-muted-foreground mb-8 text-xl">Page not found</p>
        <Link to="/" className="btn-primary inline-flex">
          <Home className="h-4 w-4" />
          Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;

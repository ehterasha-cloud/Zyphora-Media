import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "privacy" | "terms" | null;
}

export function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  if (!type) return null;

  const content = {
    privacy: {
      title: "Privacy Policy",
      body: (
        <div className="space-y-6 text-muted text-base leading-relaxed">
          <p>
            <strong>
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </strong>
          </p>
          <p>
            At Zyphora Media, we respect your privacy and are committed to
            protecting it through our compliance with this policy. This Privacy
            Policy describes the types of information we may collect from you or
            that you may provide when you visit our website, and our practices
            for collecting, using, maintaining, protecting, and disclosing that
            information.
          </p>

          <h3 className="text-primary font-semibold text-lg">
            1. Information We Collect
          </h3>
          <p>
            We collect several types of information from and about users of our
            Website, including information by which you may be personally
            identified, such as name, postal address, e-mail address, and
            telephone number ("personal information"). We collect this
            information when you fill out contact forms or communicate with us
            directly.
          </p>

          <h3 className="text-primary font-semibold text-lg">
            2. How We Use Your Information
          </h3>
          <p>
            We use information that we collect about you or that you provide to
            us, including any personal information:
            <br />
            - To present our Website and its contents to you.
            <br />
            - To provide you with information, products, or services that you
            request from us.
            <br />
            - To fulfill any other purpose for which you provide it.
            <br />- To carry out our obligations and enforce our rights arising
            from any contracts entered into between you and us.
          </p>

          <h3 className="text-primary font-semibold text-lg">
            3. Disclosure of Your Information
          </h3>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your
            Personally Identifiable Information unless we provide users with
            advance notice. This does not include website hosting partners and
            other parties who assist us in operating our website, conducting our
            business, or serving our users, so long as those parties agree to
            keep this information confidential.
          </p>

          <h3 className="text-primary font-semibold text-lg">
            4. Contact Information
          </h3>
          <p>
            To ask questions or comment about this privacy policy and our
            privacy practices, contact us at:{" "}
            <strong>zyphoramedia.co@gmail.com</strong>.
          </p>
        </div>
      ),
    },
    terms: {
      title: "Terms of Service",
      body: (
        <div className="space-y-6 text-muted text-base leading-relaxed">
          <p>
            <strong>
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </strong>
          </p>
          <p>
            Welcome to Zyphora Media. By accessing or using our website and
            services, you agree to be bound by these Terms of Service. If you
            disagree with any part of the terms, then you may not access our
            services.
          </p>

          <h3 className="text-primary font-semibold text-lg">1. Services</h3>
          <p>
            Zyphora Media provides custom web design, development, SEO, and
            branding services for businesses. The specific scope of work,
            timelines, and deliverables will be outlined in customized project
            proposals and contracts between Zyphora Media and the client.
          </p>

          <h3 className="text-primary font-semibold text-lg">
            2. Intellectual Property
          </h3>
          <p>
            The Service and its original content (excluding content provided by
            you), features, and functionality are and will remain the exclusive
            property of Zyphora Media and its licensors. Upon full payment for
            our services, final deliverables (such as custom code and design
            assets) are transferred to the client, subject to the terms of your
            specific contract.
          </p>

          <h3 className="text-primary font-semibold text-lg">
            3. Revisions and Feedback
          </h3>
          <p>
            We include a structured revision process in all our web design
            packages. Additional revisions beyond the agreed-upon scope may
            incur additional fees. Prompt feedback and necessary assets from the
            client are required to maintain project timelines.
          </p>

          <h3 className="text-primary font-semibold text-lg">
            4. Limitation of Liability
          </h3>
          <p>
            In no event shall Zyphora Media, nor its directors, employees,
            partners, agents, suppliers, or affiliates, be liable for any
            indirect, incidental, special, consequential or punitive damages,
            including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses, resulting from your access to or use of
            or inability to access or use the Service.
          </p>

          <h3 className="text-primary font-semibold text-lg">5. Contact Us</h3>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <strong>zyphoramedia.co@gmail.com</strong>.
          </p>
        </div>
      ),
    },
  };

  const currentContent = content[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-bg-main/90 backdrop-blur-xl overflow-y-auto custom-scrollbar"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-bg-card border border-border-main rounded-2xl overflow-hidden shadow-2xl flex flex-col my-auto max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 md:p-3 bg-bg-main/80 backdrop-blur-md rounded-full text-primary hover:text-accent hover:bg-bg-main transition-colors border border-border-main/50"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="p-8 md:p-10 border-b border-border-main bg-bg-section/30">
              <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">
                Legal
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-medium text-primary">
                {currentContent.title}
              </h2>
            </div>

            {/* Content Area */}
            <div className="p-8 md:p-10 overflow-y-auto flex-1">
              {currentContent.body}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

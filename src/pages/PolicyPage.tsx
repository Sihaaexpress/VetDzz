import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';

const PolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Link>
            
            <h1 className="text-4xl font-bold mb-8 text-vet-dark">Conditions d'Utilisation</h1>

            {/* Client Terms */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-vet-dark mb-6">CONDITIONS D'UTILISATION - CLIENTS</h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold mb-2">1. RESPONSABILITÉ</h3>
                  <p>L'application n'est pas responsable de la qualité des tests médicaux.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">2. OBJET</h3>
                  <p>Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation de la plateforme de laboratoires d'analyses médicales.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">3. INSCRIPTION ET COMPTE UTILISATEUR</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>L'inscription est gratuite et réservée aux personnes majeures</li>
                    <li>Les informations fournies doivent être exactes et à jour</li>
                    <li>Vous êtes responsable de la confidentialité de vos identifiants</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">4. SERVICES PROPOSÉS</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Recherche de laboratoires d'analyses médicales</li>
                    <li>Prise de rendez-vous en ligne</li>
                    <li>Accès aux résultats d'analyses</li>
                    <li>Service de prélèvement à domicile</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">5. PROTECTION DES DONNÉES</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Vos données personnelles sont protégées conformément au RGPD</li>
                    <li>Les données médicales sont cryptées et sécurisées</li>
                    <li>Vous disposez d'un droit d'accès, de rectification et de suppression</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">6. RESPONSABILITÉS</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>La plateforme facilite la mise en relation avec les laboratoires</li>
                    <li>Les analyses sont réalisées par des laboratoires agréés</li>
                    <li>Nous ne sommes pas responsables des actes médicaux</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">7. TARIFICATION</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>La consultation de la plateforme est gratuite</li>
                    <li>Les tarifs des analyses sont fixés par les laboratoires</li>
                    <li>Les modalités de paiement sont définies par chaque laboratoire</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">8. MODIFICATION DES CGU</h3>
                  <p>Ces conditions peuvent être modifiées à tout moment. Les utilisateurs en seront informés.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">9. DROIT APPLICABLE</h3>
                  <p>Les présentes CGU sont soumises au droit français.</p>
                </div>
              </div>
            </div>

            {/* Vet/Lab Terms */}
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-vet-dark mb-6">CONDITIONS PROFESSIONNELLES - LABORATOIRES</h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold mb-2">1. OBJET</h3>
                  <p>Les présentes conditions professionnelles régissent l'utilisation de la plateforme par les laboratoires d'analyses médicales.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">2. INSCRIPTION ET VALIDATION</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>L'inscription nécessite la fourniture de documents professionnels</li>
                    <li>Validation des agréments et certifications</li>
                    <li>Vérification de l'identité professionnelle</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">3. OBLIGATIONS PROFESSIONNELLES</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Respect des normes de qualité en vigueur</li>
                    <li>Maintien des agréments et certifications</li>
                    <li>Respect des délais de rendu des résultats</li>
                    <li>Formation continue du personnel</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">4. SERVICES DE LA PLATEFORME</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Référencement sur la plateforme</li>
                    <li>Gestion des rendez-vous en ligne</li>
                    <li>Interface de communication avec les patients</li>
                    <li>Outils de gestion des résultats</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">5. RESPONSABILITÉS</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Qualité des analyses et des résultats</li>
                    <li>Respect de la confidentialité médicale</li>
                    <li>Conformité aux réglementations sanitaires</li>
                    <li>Assurance responsabilité civile professionnelle</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">6. DONNÉES ET CONFIDENTIALITÉ</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Protection des données patients selon le RGPD</li>
                    <li>Cryptage des données médicales</li>
                    <li>Traçabilité des accès aux données</li>
                    <li>Audit de sécurité régulier</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">7. TARIFICATION ET FACTURATION</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Commission sur les prestations réalisées</li>
                    <li>Facturation mensuelle</li>
                    <li>Modalités de paiement définies contractuellement</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">8. RÉSILIATION</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Possibilité de résiliation à tout moment</li>
                    <li>Préavis de 30 jours</li>
                    <li>Conservation des données selon obligations légales</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">9. DROIT APPLICABLE</h3>
                  <p>Ces conditions sont soumises au droit français et aux réglementations sanitaires.</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-vet-dark mb-4">Contact</h2>
              <p className="text-gray-600 mb-4">Pour toute question concernant ces conditions:</p>
              <ul className="list-none mb-4 text-gray-600">
                <li className="mb-2"><strong>Email:</strong> VetDz@gmail.com</li>
                <li className="mb-2"><strong>WhatsApp:</strong> +213 549 70 27 88</li>
              </ul>
              <p className="text-gray-600 mt-6 font-medium">
                En utilisant VetDz, vous reconnaissez avoir lu et accepté ces Conditions d'Utilisation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PolicyPage;

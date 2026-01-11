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
            
            <h1 className="text-4xl font-bold mb-8 text-vet-dark">Conditions d'Utilisation & Politique de Confidentialité</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">Dernière mise à jour : 8 Novembre 2025</p>

              {/* Terms of Service - French */}
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold text-vet-dark mb-4">Conditions d'Utilisation - VetDz</h2>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">1. Acceptation des Conditions</h3>
                <p className="text-gray-600 mb-4">
                  En accédant et en utilisant la plateforme VetDz, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">2. Description du Service</h3>
                <p className="text-gray-600 mb-4">
                  VetDz est une plateforme de mise en relation entre propriétaires d'animaux et cliniques vétérinaires en Algérie. Nous facilitons:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>La recherche de vétérinaires à proximité</li>
                  <li>Les demandes de consultation à domicile (CVD)</li>
                  <li>Le partage sécurisé de résultats médicaux</li>
                  <li>La communication entre clients et vétérinaires</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">3. Inscription et Compte Utilisateur</h3>
                <h4 className="text-lg font-medium mt-4 mb-2">3.1 Conditions d'Inscription</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Vous devez avoir au moins 18 ans</li>
                  <li>Les informations fournies doivent être exactes et à jour</li>
                  <li>Vous êtes responsable de la confidentialité de votre mot de passe</li>
                </ul>
                <h4 className="text-lg font-medium mt-4 mb-2">3.2 Types de Comptes</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li><strong>Client</strong>: Propriétaires d'animaux</li>
                  <li><strong>Vétérinaire</strong>: Professionnels vétérinaires certifiés</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">4. Utilisation du Service</h3>
                <h4 className="text-lg font-medium mt-4 mb-2">4.1 Vous vous engagez à:</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Utiliser le service de manière légale et éthique</li>
                  <li>Ne pas usurper l'identité d'autrui</li>
                  <li>Ne pas publier de contenu offensant ou illégal</li>
                  <li>Respecter les autres utilisateurs</li>
                </ul>
                <h4 className="text-lg font-medium mt-4 mb-2">4.2 Vous ne devez pas:</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Utiliser le service à des fins frauduleuses</li>
                  <li>Tenter d'accéder aux comptes d'autres utilisateurs</li>
                  <li>Perturber le fonctionnement de la plateforme</li>
                  <li>Extraire des données de manière automatisée</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">5. Consultations à Domicile (CVD)</h3>
                <h4 className="text-lg font-medium mt-4 mb-2">5.1 Demandes CVD</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Les demandes sont transmises aux vétérinaires</li>
                  <li>L'acceptation dépend de la disponibilité du vétérinaire</li>
                  <li>Les tarifs sont fixés par chaque vétérinaire</li>
                </ul>
                <h4 className="text-lg font-medium mt-4 mb-2">5.2 Responsabilités</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>VetDz est un intermédiaire, pas un prestataire de soins</li>
                  <li>La qualité des soins relève de la responsabilité du vétérinaire</li>
                  <li>Les paiements se font directement avec le vétérinaire</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">6. Données Médicales</h3>
                <h4 className="text-lg font-medium mt-4 mb-2">6.1 Confidentialité</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Vos données médicales sont chiffrées</li>
                  <li>Seuls vous et votre vétérinaire y avez accès</li>
                  <li>Nous ne vendons jamais vos données</li>
                </ul>
                <h4 className="text-lg font-medium mt-4 mb-2">6.2 Stockage</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Les résultats médicaux sont stockés de manière sécurisée</li>
                  <li>Vous pouvez supprimer vos données à tout moment</li>
                  <li>Conservation selon les normes légales algériennes</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">7. Propriété Intellectuelle</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Le code, design et contenu de VetDz sont protégés</li>
                  <li>Vous ne pouvez pas copier ou reproduire sans autorisation</li>
                  <li>Vous conservez les droits sur vos photos et données</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">8. Limitation de Responsabilité</h3>
                <p className="text-gray-600 mb-4">VetDz n'est PAS responsable de:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>La qualité des soins vétérinaires fournis</li>
                  <li>Les erreurs de diagnostic ou traitement</li>
                  <li>Les litiges entre clients et vétérinaires</li>
                  <li>Les pertes de données dues à des cas de force majeure</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">9. Suspension et Résiliation</h3>
                <p className="text-gray-600 mb-4">Nous pouvons suspendre votre compte si:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Vous violez ces conditions</li>
                  <li>Vous utilisez le service de manière abusive</li>
                  <li>Votre compte présente une activité suspecte</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">10. Loi Applicable</h3>
                <p className="text-gray-600 mb-4">
                  Ces conditions sont régies par les lois algériennes. Tout litige sera soumis aux tribunaux compétents d'Algérie.
                </p>
              </div>

              {/* Client Terms */}
              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold text-vet-dark mb-4">Conditions d'Utilisation - Clients</h2>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">1. Responsabilité</h3>
                <p className="text-gray-600 mb-4">
                  L'application n'est pas responsable de la qualité des tests médicaux.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">2. Inscription et Compte</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>L'inscription est gratuite et réservée aux personnes majeures</li>
                  <li>Les informations fournies doivent être exactes et à jour</li>
                  <li>Vous êtes responsable de la confidentialité de vos identifiants</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">3. Services Proposés</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Recherche de vétérinaires</li>
                  <li>Prise de rendez-vous en ligne</li>
                  <li>Accès aux résultats d'analyses</li>
                  <li>Service de consultation à domicile</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">4. Protection des Données</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Vos données personnelles sont protégées</li>
                  <li>Les données médicales sont cryptées et sécurisées</li>
                  <li>Vous disposez d'un droit d'accès, de rectification et de suppression</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">5. Tarification</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>La consultation de la plateforme est gratuite</li>
                  <li>Les tarifs des consultations sont fixés par les vétérinaires</li>
                  <li>Les modalités de paiement sont définies par chaque vétérinaire</li>
                </ul>
              </div>

              {/* Vet/Lab Terms */}
              <div className="bg-purple-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold text-vet-dark mb-4">Conditions Professionnelles - Vétérinaires</h2>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">1. Inscription et Validation</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>L'inscription nécessite la fourniture de documents professionnels</li>
                  <li>Validation des agréments et certifications</li>
                  <li>Vérification de l'identité professionnelle</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">2. Obligations Professionnelles</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Respect des normes de qualité en vigueur</li>
                  <li>Maintien des agréments et certifications</li>
                  <li>Respect des délais de rendu des résultats</li>
                  <li>Formation continue du personnel</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">3. Services de la Plateforme</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Référencement sur la plateforme</li>
                  <li>Gestion des rendez-vous en ligne</li>
                  <li>Interface de communication avec les patients</li>
                  <li>Outils de gestion des résultats</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">4. Responsabilités</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Qualité des soins et des résultats</li>
                  <li>Respect de la confidentialité médicale</li>
                  <li>Conformité aux réglementations sanitaires</li>
                  <li>Assurance responsabilité civile professionnelle</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">5. Résiliation</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Possibilité de résiliation à tout moment</li>
                  <li>Préavis de 30 jours</li>
                  <li>Conservation des données selon obligations légales</li>
                </ul>
              </div>

              {/* Privacy Policy */}
              <div className="bg-orange-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold text-vet-dark mb-4">Politique de Confidentialité</h2>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">1. Informations Collectées</h3>
                <h4 className="text-lg font-medium mt-4 mb-2">1.1 Informations Personnelles</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Nom, email, numéro de téléphone</li>
                  <li>Adresse et données de localisation</li>
                  <li>Informations sur les animaux (nom, espèce, historique médical)</li>
                </ul>
                <h4 className="text-lg font-medium mt-4 mb-2">1.2 Données d'Utilisation</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Pages visitées, fonctionnalités utilisées</li>
                  <li>Informations sur l'appareil, adresse IP</li>
                  <li>Interactions avec les vétérinaires</li>
                </ul>
                <h4 className="text-lg font-medium mt-4 mb-2">1.3 Données Médicales</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Résultats de consultations vétérinaires</li>
                  <li>Documents et images médicaux</li>
                  <li>Historique des traitements</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">2. Utilisation des Informations</h3>
                <h4 className="text-lg font-medium mt-4 mb-2">2.1 Pour Fournir les Services</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Vous connecter avec des vétérinaires</li>
                  <li>Traiter les demandes de consultation à domicile</li>
                  <li>Stocker et partager les résultats médicaux de manière sécurisée</li>
                </ul>
                <h4 className="text-lg font-medium mt-4 mb-2">2.2 Pour Améliorer les Services</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Analyser les modèles d'utilisation</li>
                  <li>Corriger les bugs et améliorer les performances</li>
                  <li>Développer de nouvelles fonctionnalités</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">3. Sécurité des Données</h3>
                <h4 className="text-lg font-medium mt-4 mb-2">3.1 Mesures de Protection</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Chiffrement de bout en bout pour les données médicales</li>
                  <li>Serveurs sécurisés (Supabase)</li>
                  <li>Audits de sécurité réguliers</li>
                  <li>Contrôles d'accès et authentification</li>
                </ul>
                <h4 className="text-lg font-medium mt-4 mb-2">3.2 Stockage des Données</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Stockées dans une infrastructure cloud sécurisée</li>
                  <li>Sauvegardées régulièrement</li>
                  <li>Conservées uniquement le temps nécessaire</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">4. Partage des Données</h3>
                <h4 className="text-lg font-medium mt-4 mb-2">4.1 Nous ne faisons JAMAIS:</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Vendre vos données personnelles</li>
                  <li>Partager des données médicales sans consentement</li>
                  <li>Utiliser vos données pour la publicité</li>
                </ul>
                <h4 className="text-lg font-medium mt-4 mb-2">4.2 Nous POUVONS Partager Avec:</h4>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Les vétérinaires que vous contactez (uniquement les données pertinentes)</li>
                  <li>Les autorités légales (si requis par la loi)</li>
                  <li>Les prestataires de services (sous stricte confidentialité)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">5. Vos Droits</h3>
                <p className="text-gray-600 mb-4">Vous avez le droit de:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Accéder à vos données personnelles</li>
                  <li>Corriger les informations inexactes</li>
                  <li>Supprimer votre compte et vos données</li>
                  <li>Exporter vos données</li>
                  <li>Vous désinscrire des communications</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">6. Cookies et Suivi</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Cookies essentiels (pour la fonctionnalité)</li>
                  <li>Cookies analytiques (pour améliorer le service)</li>
                  <li>Pas de cookies publicitaires</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">7. Confidentialité des Enfants</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Le service est réservé aux utilisateurs de 18 ans et plus</li>
                  <li>Nous ne collectons pas sciemment de données de mineurs</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">8. Conservation des Données</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Comptes actifs: Données conservées tant que le compte est actif</li>
                  <li>Comptes supprimés: Données supprimées dans les 30 jours</li>
                  <li>Exigences légales: Peut être conservé plus longtemps si requis par la loi</li>
                </ul>
              </div>

              {/* Contact */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-vet-dark mb-4">Contact</h2>
                <p className="text-gray-600 mb-4">Pour toute question concernant ces conditions:</p>
                <ul className="list-none mb-4 text-gray-600">
                  <li className="mb-2"><strong>Email:</strong> VetDz@gmail.com</li>
                  <li className="mb-2"><strong>WhatsApp:</strong> +213 549 70 27 88</li>
                  <li><strong>Adresse:</strong> 33 El khroub Constantine, Algérie</li>
                </ul>
                <p className="text-gray-600 mt-6 font-medium">
                  En utilisant VetDz, vous reconnaissez avoir lu et compris ces Conditions d'Utilisation et cette Politique de Confidentialité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PolicyPage;

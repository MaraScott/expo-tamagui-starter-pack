import React from 'react'
import { TamaguiProvider, Theme, YStack, XStack, Paragraph, Text, getTokenValue } from 'tamagui'
import { config } from '@app/tamagui.config'
import { Container } from '@atoms/Container'
import { Section } from '@atoms/Section'
import { GlowH2, Muted } from '@atoms/Text'
import { Card } from '@atoms/Card'
import { Button } from '@atoms/Button'
import { HeaderBar } from '@molecules/HeaderBar'
import { Hero } from '@molecules/Hero'
import { Grid2 } from '@molecules/Grid'
import { Gallery } from '@molecules/Gallery'
import { Map } from '@molecules/Map'
import { BulletList, Yes } from '@organisms/FeatureList'

import FrontImg from '@assets/img/front-20251014-100700-e111ef2b.png'

export default function VannesIndex() {
    const [theme, setTheme] = React.useState<'dark' | 'light'>('dark')

    const onPrint = React.useCallback(() => {
        if (typeof window !== 'undefined' && window.print) window.print()
    }, [])

    return (
        <TamaguiProvider config={config}>
            <Theme name={theme}>
                <YStack f={1} bc="$bg">
                    <Container>
                        <HeaderBar
                            onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
                            onPrint={onPrint}
                        />

                        <Hero
                            src={FrontImg}
                            alt="Vannes, remparts et port – visuel d'ambiance"
                            title="Maison ★★★ – Vannes (Secteur Le Jointo)"
                        />

                        <Section>
                            <GlowH2>🌅 Maison de Vacances *** (3 étoiles)</GlowH2>
                            <Paragraph color="$muted">
                                Bienvenue dans notre charmante maison classée <Text fontWeight="700">3 étoiles</Text>, idéalement située
                                pour profiter pleinement de votre séjour ! Nous avons tout prévu pour que votre expérience soit
                                confortable, pratique et reposante.
                            </Paragraph>

                            <Grid2
                                left={
                                    <YStack gap={8}>
                                        <GlowH2>🏡 Caractéristiques principales</GlowH2>
                                        <YStack gap={6}>
                                            <Paragraph><Text fontWeight="700">Capacité d’accueil</Text> : <Text fontWeight="700">4 personnes</Text></Paragraph>
                                            <Paragraph><Text fontWeight="700">Surface habitable</Text> : <Text fontWeight="700">80 m²</Text></Paragraph>
                                            <Paragraph><Text fontWeight="700">Nombre de chambres</Text> : <Text fontWeight="700">2</Text></Paragraph>
                                            <Paragraph><Text fontWeight="700">Salle de bain / WC</Text> : <Text fontWeight="700">1 / 1</Text></Paragraph>
                                            <Paragraph><Text fontWeight="700">Accès Internet Wi-Fi</Text> : <Yes /></Paragraph>
                                            <Paragraph><Text fontWeight="700">Télévision à écran plat</Text> : <Yes /></Paragraph>
                                            <Paragraph><Text fontWeight="700">Chauffage et ventilation</Text> : <Yes /></Paragraph>
                                        </YStack>
                                    </YStack>
                                }
                                right={
                                    <Card>
                                        <GlowH2>✨ Services inclus</GlowH2>
                                        <YStack gap={6}>
                                            <Paragraph>Boîte à clés sécurisée : <Yes /> , arrivée autonome facilitée.</Paragraph>
                                            <Paragraph>Draps de lit fournis systématiquement : <Yes /> , linge propre à chaque séjour.</Paragraph>
                                            <Paragraph>Linge de toilette fourni : <Yes /> , serviettes et tapis de bain inclus.</Paragraph>
                                            <Paragraph>Lits faits à l’arrivée : <Yes /> , vos lits sont prêts dès votre arrivée.</Paragraph>
                                            <Paragraph>Service de ménage après chaque séjour : <Yes /> , effectué par un professionnel.</Paragraph>
                                        </YStack>
                                    </Card>
                                }
                            />
                        </Section>

                        <Section>
                            <Grid2
                                left={
                                    <BulletList
                                        title="🍽️ Cuisine équipée"
                                        bullets={[
                                            <>Plaque de cuisson, four et micro-ondes</>,
                                            <>Réfrigérateur avec compartiment congélateur</>,
                                            <>Cafetière, bouilloire, grille-pain</>,
                                            <>Vaisselle et ustensiles complets pour <Text fontWeight="700">4</Text> personnes</>,
                                        ]}
                                    />
                                }
                                right={
                                    <Card>
                                        <BulletList
                                            title="♻️ Engagement environnemental"
                                            bullets={[
                                                <>Tri sélectif des déchets</>,
                                                <>Produits d’entretien respectueux de l’environnement</>,
                                                <>Conseils simples pour un séjour écoresponsable</>,
                                            ]}
                                        />
                                    </Card>
                                }
                            />
                        </Section>

                        <Section>
                            <Grid2
                                left={
                                    <BulletList
                                        title="🛋️ Confort et équipements"
                                        bullets={[
                                            <>Canapé et fauteuils confortables</>,
                                            <>Table à manger avec chaises assorties</>,
                                            <>Fer et table à repasser</>,
                                            <>Étendoir à linge</>,
                                            <>Produits d’entretien écologiques à disposition</>,
                                        ]}
                                    />
                                }
                                right={
                                    <Card>
                                        <BulletList
                                            title="🌿 Extérieurs et environnement"
                                            bullets={[
                                                <>Terrasse / jardin privatif avec mobilier d’extérieur</>,
                                                <>Barbecue ou plancha à disposition</>,
                                                <>Stationnement facile à proximité</>,
                                                <>À moins de 1 km des commerces, restaurants et transports</>,
                                            ]}
                                        />
                                    </Card>
                                }
                            />
                        </Section>

                        <Section>
                            <GlowH2>📍 Localisation</GlowH2>
                            <Muted>
                                Zone géographique : <Text fontWeight="700">Secteur Le Jointo</Text>, Vannes (adresse exacte communiquée après réservation).
                            </Muted>
                            {/* Map placeholder: embed your Leaflet when on web; hide on print via CSS @media from your global styles if needed */}
                            <Map center={[47.65461526185612, -2.7522613448995985]} height={340} zoom={16} popupText={`<strong>Secteur Le Jointo</strong>, Vannes`} />
                            <YStack display="none" id="map-print-placeholder">
                                <Text>Carte – zone approximative Le Jointo, Vannes (visible en ligne)</Text>
                            </YStack>
                        </Section>

                        <Section>
                            <GlowH2>Galerie — Secteur Le Jointo (Vannes)</GlowH2>
                            <Gallery
                                images={[
                                    { alt: 'Vannes – Photo quartier (1)', src: FrontImg },
                                    { alt: 'Vannes – Photo quartier (2)', src: FrontImg },
                                    { alt: 'Vannes – Photo quartier (3)', src: FrontImg },
                                ]}
                            />
                        </Section>

                        <Section>
                            <XStack ai="center" jc="space-between" fw="wrap" gap={10}>
                                <YStack>
                                    <GlowH2>📞 Contact & Réservation</GlowH2>
                                    <Text>
                                        <Text fontWeight="700">Hôte :</Text> David <Text className="obf">********A</Text>{'\n'}
                                        <Text fontWeight="700">Téléphone :</Text> <Text id="tel">(+33) 6 00 00 00 00</Text>{'\n'}
                                        <Text fontWeight="700">E-mail :</Text> <Text id="email">contact@example.com</Text>{'\n'}
                                        <Text fontWeight="700">Site / Airbnb :</Text> <Muted>à venir</Muted>
                                    </Text>
                                </YStack>
                                <Text
                                    as="a"
                                    href="#reservation"
                                    px={20}
                                    py={14}
                                    br="$md"
                                    fontWeight="700"
                                    color="white"
                                    textDecorationLine="none"
                                    style={{ 
                                        backgroundImage: `linear-gradient(90deg, ${getTokenValue('$accent')}, ${getTokenValue('$accent2')})` }}
                                >
                                    Vérifier les disponibilités
                                </Text>
                            </XStack>
                        </Section>

                        <Paragraph color="$muted" mt={16}>
                            <Text fontWeight="700">Classement officiel meublé de tourisme 3 étoiles</Text>, conforme à l’arrêté du 24 novembre 2021 (Journal Officiel du 5 décembre 2021).
                        </Paragraph>
                    </Container>
                </YStack>
            </Theme>
        </TamaguiProvider>
    )
}

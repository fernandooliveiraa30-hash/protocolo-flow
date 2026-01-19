import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 60,
        backgroundColor: '#ffffff',
        fontFamily: 'Helvetica',
    },
    header: {
        marginBottom: 40,
        borderBottom: '2pt solid #000',
        paddingBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
    },
    section: {
        marginBottom: 20,
    },
    text: {
        fontSize: 12,
        lineHeight: 1.6,
        color: '#333',
        textAlign: 'justify',
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 60,
        right: 60,
        fontSize: 10,
        color: '#999',
        textAlign: 'center',
        borderTop: '1pt solid #eee',
        paddingTop: 10,
    }
});

export const PerformancePDF = ({ content }: { content: string }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.title}>Plano de Alta Performance</Text>
                <Text style={styles.subtitle}>Gerado via IA Evolucionária</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.text}>
                    {content}
                </Text>
            </View>

            <Text style={styles.footer}>
                Este documento é exclusivo e foi gerado com base em seus perfis específicos.
            </Text>
        </Page>
    </Document>
);

module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/app/green-energy/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GreenEnergyPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$legacy$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/legacy-page.js [app-rsc] (ecmascript)");
;
;
const metadata = {
    title: 'Green Energy',
    description: 'Solar energy, sustainable construction, and environmental initiatives for clients across Zambia.',
    alternates: {
        canonical: '/green-energy'
    }
};
function GreenEnergyPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$legacy$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        page: "green-energy"
    }, void 0, false, {
        fileName: "[project]/app/green-energy/page.js",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/green-energy/page.js [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/green-energy/page.js [app-rsc] (ecmascript)"));
}),
"[project]/app/legacy-page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LegacyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
;
const pageFiles = {
    home: 'home.html',
    about: 'about.html',
    services: 'services.html',
    'green-energy': 'greenenergy.html',
    credentials: 'certs.html',
    contact: 'contact.html'
};
function normalizeFragment(html) {
    return html.replace(/\r\n?/g, '\n').replaceAll('src="resources/', 'src="/resources/').replaceAll('src="images/', 'src="/images/').replaceAll('id="hero-video-1" class="hero-video active"', 'id="hero-video-1" class="hero-video active" poster="/images/hero/hero1.webp"').replaceAll('id="hero-video-2" class="hero-video"', 'id="hero-video-2" class="hero-video" poster="/images/hero/hero2.webp"').replaceAll('href="resources/', 'href="/resources/').replaceAll('href="/resources/', 'href="/resources/').replaceAll("href=\"javascript:void(0)\" onclick=\"showPage('home')\"", 'href="/"').replaceAll("href=\"javascript:void(0)\" onclick=\"showPage('about')\"", 'href="/about"').replaceAll("href=\"javascript:void(0)\" onclick=\"showPage('services')\"", 'href="/services"').replaceAll("href=\"javascript:void(0)\" onclick=\"showPage('greenenergy')\"", 'href="/green-energy"').replaceAll("href=\"javascript:void(0)\" onclick=\"showPage('certs')\"", 'href="/credentials"').replaceAll("href=\"javascript:void(0)\" onclick=\"showPage('contact')\"", 'href="/contact"').replaceAll('href="javascript:void(0)"', 'href="#"').replaceAll(/onclick="showPage\('services:([^']+)'\)(?:; return false)?"/g, 'data-service="#services-section-$1"').replaceAll(/onclick="showPage\('([^']+)'\)(?:; return false)?"/g, 'data-route="/$1"').replaceAll(/onclick="toggleServiceDetail\('([^']+)'\)"/g, 'data-service="#services-section-$1"').replaceAll(/onclick="toggleMore\(this\)"/g, 'data-toggle-more="true"').replaceAll(/onclick="document\.getElementById\('([^']+)'\)\.scrollIntoView\(\{behavior:'smooth'\}\)"/g, 'data-scroll-target="#$1"').replaceAll('onsubmit="submitForm(event)"', 'action="https://formspree.io/f/mnjynozp" method="post"').replaceAll(/\s+onclick="[^"]*"/g, '');
}
async function LegacyPage({ page }) {
    const filename = pageFiles[page];
    if (!filename) return null;
    const html = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].readFile(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), 'pages', filename), 'utf8');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `page active page-${page}`,
            suppressHydrationWarning: true,
            dangerouslySetInnerHTML: {
                __html: normalizeFragment(html)
            }
        }, void 0, false, {
            fileName: "[project]/app/legacy-page.js",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/legacy-page.js",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__08aywe5._.js.map
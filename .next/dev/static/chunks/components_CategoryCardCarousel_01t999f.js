(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/CategoryCardCarousel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryCardCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function CategoryCardCarousel({ slides = [], interval = 3200 }) {
    _s();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CategoryCardCarousel.useEffect": ()=>{
            if (!slides.length || slides.length <= 1) return;
            const timer = setInterval({
                "CategoryCardCarousel.useEffect.timer": ()=>{
                    setCurrent({
                        "CategoryCardCarousel.useEffect.timer": (prev)=>(prev + 1) % slides.length
                    }["CategoryCardCarousel.useEffect.timer"]);
                }
            }["CategoryCardCarousel.useEffect.timer"], interval);
            return ({
                "CategoryCardCarousel.useEffect": ()=>clearInterval(timer)
            })["CategoryCardCarousel.useEffect"];
        }
    }["CategoryCardCarousel.useEffect"], [
        slides.length,
        interval
    ]);
    if (!slides.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "category-card-carousel",
        children: [
            slides.map((slide, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `carousel-slide ${idx === current ? 'active' : ''}`,
                    "aria-hidden": idx !== current,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: slide.img,
                            alt: slide.caption || 'Service preview',
                            fill: true,
                            sizes: "(max-width: 768px) 100vw, 400px",
                            className: "carousel-slide-img"
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryCardCarousel.js",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "carousel-slide-caption",
                            children: slide.caption
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryCardCarousel.js",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, idx, true, {
                    fileName: "[project]/components/CategoryCardCarousel.js",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)),
            slides.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "carousel-dots-indicator",
                "aria-hidden": "true",
                children: slides.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `carousel-dot ${idx === current ? 'active' : ''}`,
                        onClick: (e)=>{
                            e.stopPropagation();
                            setCurrent(idx);
                        }
                    }, idx, false, {
                        fileName: "[project]/components/CategoryCardCarousel.js",
                        lineNumber: 41,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/CategoryCardCarousel.js",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CategoryCardCarousel.js",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(CategoryCardCarousel, "Ce5S7Zpl2S4YgGoPn+G4m52qKq8=");
_c = CategoryCardCarousel;
var _c;
__turbopack_context__.k.register(_c, "CategoryCardCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_CategoryCardCarousel_01t999f.js.map
/*
To use this open the browser console and paste in the bottom part.
*/
(function() {
    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);

    }
    let rack = JSON.parse(document.querySelector("script[data-mg-json=rtd]").innerText).rack;
    let modules = rack.Module.filter((module) => (module.ModulesRack.is_inbounds));
    let looseModules = rack.Module.filter((module) => (!module.ModulesRack.is_inbounds));
    console.info("modules:", modules);
    console.info("loose modules", looseModules);
    let priceTotal = 0;
    let outStr = "";
    modules.sort((a, b) => {
        if (a?.Vendor?.name.toLocaleLowerCase().localeCompare(b?.Vendor?.name.toLocaleLowerCase()) !== 0) {
            return a?.Vendor?.name.toLocaleLowerCase().localeCompare(b?.Vendor?.name.toLocaleLowerCase());
        } else {
            return a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase());
        }
    });
    modules.forEach((module) => {
        const musicProType = "I";
        const vendor = module?.Vendor?.name;
        const name = module?.name;
        const manModel = `"${vendor} ${name}"`;
        const serialNo = "";
        const desc = `"${module?.description}"`;
        const value = (module?.price_usd) ? parseInt(module?.price_usd, 10) : 0;
        priceTotal += value;
        outStr += `${musicProType},${manModel},${serialNo},${desc},${value}\n`;
        console.info(vendor, name, `\$${value}`);
    });
    console.info(outStr);
    console.info("Total price: $" + priceTotal);
    download(rack?.Rack?.name + ".csv", outStr);
})();
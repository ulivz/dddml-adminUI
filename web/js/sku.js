function getSkuSetPriceRange(skuSet) {
    var minPrice = 9999999;
    var maxPrice = -1;

    for (var key in skuSet) {
        var price = skuSet[key].price;

        if (price < minPrice) {
            minPrice = price;
        }

        if (price > maxPrice) {
            maxPrice = price;
        }
    }

    if (minPrice != maxPrice) {
        return minPrice + ' ~ ' + maxPrice;
    } else {
        return minPrice;
    }
}

function getSkuSetStockRange(skuSet) {
    var min = 9999999;
    var max = -1;

    for (var key in skuSet) {
        var stock = skuSet[key].stock;

        if (stock < min) {
            min = stock;
        }

        if (stock > max) {
            max = stock;
        }
    }

    if (min != max) {
        return min + ' ~ ' + max;
    } else {
        return min;
    }
}

function attrAndValueStr(attr, value) {
    return ';' + attr + ':' + value + ';';
}

function convertApi(data) {
    var skuSet = {};
    var attributes = [];

    var fromAttributes = data.attributes;
    var tmpAttributes = {};
    var tmpAttributes1 = {};

    for (var attrKey = 0; attrKey < fromAttributes.length; attrKey++) {
        var values = {};
        var attr = fromAttributes[attrKey];

        for (var i = 0; i < attr.values.length; i++) {
            var value = attr.values[i];
            values[value.id] = value.value;
        }

        tmpAttributes[attr.id] = {
            name: attr.name,
            values: values
        };

        tmpAttributes1[attr.id] = {
            id: attr.id,
            name: attr.name,
            values: {}
        }
    }

    // console.log(tmpAttributes);

    for (var key = 0; key < data.skus.length; key++) {
        var skuKey = ';';
        var instances = data.skus[key].instances;

        for (var i = 0; i < instances.length; i++) {
            var sku = instances[i];
            skuKey += sku.attributeId +
                ':' + sku.attributeValueId + ';';

            tmpAttributes1[sku.attributeId].values[sku.attributeValueId]
                = tmpAttributes[sku.attributeId].values[sku.attributeValueId]
        }

        skuSet[skuKey] = {
            id: data.skus[key].skuId.attributeSetInstanceId +
            ':' + data.skus[key].skuId.productId,
            price: data.skus[key].price,
            specification: data.skus[key].specification,
            stock: 9999
        };
    }
    // console.log(tmpAttributes1);

    return {
        skuSet: skuSet,
        attributes: tmpAttributes1
    };
}
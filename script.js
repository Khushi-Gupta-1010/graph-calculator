const graphTypeSelect = document.getElementById('graphType');
const orderInput = document.getElementById('order');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

function majorityDominationPath(n) {
    if (n < 2) {
        return "Graph order must be at least 2";
    }

    if (n % 2 === 0) {
        return n - 2 * Math.ceil(n / 6);
    } else {
        return n - 2 * Math.ceil((n + 1) / 6);
    }
}

function majorityDominationComplete(n) {
    if (n < 3) {
        return "Complete graph order must be at least 3";
    }

    if (n % 2 === 0) {
        return 0;
    } else {
        return 1;
    }
}

function majorityDominationStar(n) {
    if (n < 2) {
        return "Star graph order must be at least 2";
    }

    return n - 2;
}

function majorityDominationComplementPath(n) {
    if (n < 10) {
        return "Complement of path graph order must be at least 10";
    }

    return n - 2 * Math.floor(n / 2);
}

function calculateMajorityDomination() {
    const graphType = graphTypeSelect.value;
    const order = parseInt(orderInput.value);

    if (isNaN(order)) {
        resultDiv.textContent = "Please enter a valid order";
        return;
    }

    let result;
    switch (graphType) {
        case 'path':
        case 'cycle':
            result = majorityDominationPath(order);
            break;
        case 'complete':
            result = majorityDominationComplete(order);
            break;
        case 'star':
            result = majorityDominationStar(order);
            break;
        case 'complementPath':
            result = majorityDominationComplementPath(order);
            break;
        default:
            result = "Invalid graph type";
    }

    if (typeof result === 'number') {
        resultDiv.textContent = ` ${result}`;
    } else {
        resultDiv.textContent = result;
    }
}

calculateBtn.addEventListener('click', calculateMajorityDomination);
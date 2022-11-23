const submit = document.getElementById("submit")
const result = document.getElementById("ketqua")

let S = [],
    T = [],
    ketqua = [];

function KeyToNumber(x) {
    switch (x) {
        case 'A': return 0
            break
        case 'B': return 1
            break
        case 'C': return 2
            break
        case 'D': return 3
            break
        case 'E': return 4
            break
        case 'F': return 5
            break
        case 'G': return 6
            break
        case 'H': return 7
            break
        default: return -1
    }
}
function NumberToKey(x) {
    switch (x) {
        case 0: return 'A'
            break
        case 1: return 'B'
            break
        case 2: return 'C'
            break
        case 3: return 'D'
            break
        case 4: return 'E'
            break
        case 5: return 'F'
            break
        case 6: return 'G'
            break
        case 7: return 'H'
            break
        default: return -1
    }
}
const KhoiTao = (k) => {
    for (let i = 0; i < 8; i++) {
        S.push(i);
        let index = i % k.length
        T.push(parseInt(k.substring(index, index + 1)));
    }
}
const Swap = (S, i, j) => {
    if (i == j) return S
    else {
        let temp = S[i]
        S[i] = S[j]
        S[j] = temp
        return S
    }
}
const HoanVi = (S, T) => {
    let j = 0;
    for (let i = 0; i < 8; i++) {
        j = (j + S[i] + T[i]) % 8
        S = Swap(S, i, j)
    }
    return S
}
const MaHoa = (S, strings) => {
    let i = 0; j = 0
    let t, k
    for (let x = 0; x < strings.length; x++) {
        i = (i + 1) % 8
        j = (j + S[i]) % 8
        S = Swap(S, i, j)
        t = (S[i] + S[j]) % 8
        k = S[t]
        ketqua.push(KeyToNumber(strings.substring(x, x + 1)) ^ k)
    }
    for (let y = 0; y < ketqua.length; y++) {
        ketqua[y] = NumberToKey(ketqua[y])
    }
    console.log(ketqua.join(''));
    return ketqua.join('')
}

submit.onclick = (e) => {
    e.preventDefault()
    const strings = document.getElementById("strings").value
    const k = document.getElementById("k").value
    KhoiTao(k)
    S = HoanVi(S, T)
    return result.innerHTML = MaHoa(S, strings)
}


const charactersId = [1017100, 1009144, 1009146, 1010354, 1011031, 1010755, 1010905,
1011684, 1009740, 1011758, 1009165, 1011766, 1009596, 1011778, 1011785, 1011793,
1011346, 1010782, 1011907, 1011809, 1017109, 1011836, 1011119, 1010366, 1011276,
1009220, 1017575, 1017105, 1009225, 1009688, 1011937, 1012019, 1010754, 1012065,
1010676, 1009262, 1010890, 1011071, 1017102, 1009297, 1017110, 1009299, 1009539,
1010980, 1009645, 1011299, 1009619, 1011490, 1017108, 1011482, 1009351, 1017098,
1017107, 1016839, 1009368, 1017104, 1009538, 1011876, 1011105, 1009721, 1011319,
1009735, 1009708, 1010993, 1009677, 1009439, 1013727, 1017577, 1017078, 1016837,
1010779, 1016840, 1017099, 1010744, 1010747, 1009553, 1010861, 1010790, 1011230,
1009566, 1011242, 1009581, 1009568, 1009571, 1010345, 1009573, 1010975, 1010974,
1011406, 1009576, 1009577, 1009578, 1010712, 1009579, 1009580, 1017111, 1009583,
1009582, 1011394, 1009585, 1010858, 1009587, 1009588, 1010848, 1009589, 1009590,
1009591, 1010976, 1009592, 1010864, 1009594, 1010834, 1011223, 1017101, 1009598,
1011157, 1011057, 1011070, 1010761, 1009602, 1010874, 1009603, 1009606, 1010855,
1010693, 1010833, 1011032, 1009157, 1009609, 1011347, 1012200, 1011114, 1016181,
1009610, 1011010, 1009608, 1010794, 1009614, 1011158, 1010899, 1009616, 1011180,
1010860, 1010733, 1009621, 1010764, 1011084, 1011341, 1010828, 1012230, 1011159,
1009625, 1009626, 1009627, 1009628, 1009629, 1010979, 1010978, 1011062, 1011051,
1009632, 1010791, 1011212, 1009636, 1010981, 1009638, 1011022, 1009639, 1011232,
1011160, 1010695, 1011477, 1011075, 1011017, 1009641, 1010982, 1009643, 1009646,
1010753, 1011395, 1011161, 1010713, 1011854, 1009648, 1011896, 1011162, 1009651,
1011034, 1009652, 1012080, 1017103, 1011181, 1009662, 1010983, 1009664, 1017576,
1017106, 1011025, 1010820, 1010885, 1009666, 1009667, 1010360, 1011304, 1009669,
1009670, 1010857, 1011345, 1011960, 1010669, 1009673, 1009675, 1011309, 1009676,
1010822, 1011978, 1010825, 1010335, 1011047, 1010369, 1009681, 1009682, 1009683,
1010358, 1016825, 1011311, 1009685, 1009686, 1010862, 1010985, 1010696, 1010984,
1009687, 1010987, 1010988, 1010986, 1010350, 1011182, 1010989, 1011365, 1009689,
1011316, 1009690, 1010872, 1011231, 1009691, 1009663, 1010788, 1011128, 1011106,
1009693, 1010353, 1009694, 1009695, 1009696, 1009697, 1011011, 1009699, 1010990,
1010849, 1011267, 1009700, 1009701, 1017834, 1010991, 1009704, 1011287, 1009705,
1009706, 1009707, 1010992, 1010765, 1011588, 1009711, 1010348, 1010853, 1016838,
1011425, 1009714, 1009715, 1010994, 1009633, 1011009, 1011043, 1011290, 1009717,
1010995, 1009718, 1011006, 1009719, 1009720, 1010884, 1009722, 1009725, 1009726,
1010875, 1009734, 1009736, 1009737, 1010996, 1011542, 1011163, 1011515, 1011127,
1009741, 1011183, 1009742]

let randomArrIdx: Array<number> = []

function randomCharactersId() {
    for (let i = 0; i < 5; i++) {
        const random = Math.round(Math.random() * charactersId.length)
        randomArrIdx.push(random)
    }
    const newArr = randomArrIdx.map(idx => charactersId[idx])
    return newArr
}

export {randomCharactersId}
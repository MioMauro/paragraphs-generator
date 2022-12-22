const text = [
`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor ligula vel risus aliquam, quis pellentesque eros dapibus. Suspendisse potenti. Mauris porttitor, neque id convallis porttitor, diam tellus dignissim lectus, non dictum lectus quam id lorem. Morbi aliquam facilisis velit sed facilisis. Nulla bibendum volutpat libero, et lacinia massa consectetur non. Etiam viverra neque eget sem dapibus, eget hendrerit lectus elementum. Curabitur pharetra aliquet nunc, eget ultrices tortor mollis sed. Sed quis egestas sem, nec accumsan ex. Sed sit amet sollicitudin elit. Proin vestibulum commodo nisl in dapibus. Etiam id tellus vel lectus fringilla feugiat id id nisl. Aenean non placerat ligula. Nam vitae ornare nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat ligula nunc, nec tempor odio fringilla ut.`,
`Mauris eget fringilla dui. Aliquam accumsan velit enim, in commodo magna consectetur ac. Etiam nibh enim, condimentum sed pretium eu, cursus ac elit. Suspendisse congue mi ligula, fringilla faucibus tellus lobortis non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt, ipsum et fermentum ornare, eros velit dapibus lorem, nec cursus lectus dui et libero. In hac habitasse platea dictumst.`,
`Ut at rutrum velit, eget mattis elit. Morbi sit amet bibendum purus. Proin porttitor urna nibh, lacinia euismod neque sollicitudin eget. Sed ac mollis neque. Duis velit urna, accumsan ut luctus eu, convallis id ligula. Praesent vestibulum dui velit, sit amet volutpat libero aliquam eget. Suspendisse iaculis, risus quis sagittis aliquam, metus risus venenatis tortor, sed rhoncus nisl velit in lacus. Fusce mollis sem at ex auctor scelerisque. Vestibulum ante tellus, dignissim sit amet interdum sit amet, commodo ac sapien. Sed in varius metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse nec placerat mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum malesuada leo non nulla volutpat, eget lacinia est tempor. Etiam tempus ipsum lectus, in laoreet libero mollis euismod.`,
`Praesent pellentesque ipsum consequat lectus imperdiet congue. Aenean condimentum vel tellus quis tempor. Ut pharetra nisi eu pellentesque porta. Phasellus vel nulla ultrices dui interdum rhoncus semper dictum lorem. Sed gravida sodales metus eget aliquet. Aliquam dapibus ultricies sapien efficitur dignissim. Nunc eget urna vel nulla gravida luctus in non tortor.`,
`Suspendisse id arcu nisi. Nulla rhoncus, elit nec luctus tristique, mi diam ultrices nibh, sit amet ullamcorper massa felis sit amet nisl. Sed a magna elit. Ut ultrices felis vel est tempor, vitae egestas sem tempor. Etiam varius enim dolor, elementum porta enim fringilla eget. Integer tristique elit massa, non dignissim urna euismod et. Nullam efficitur augue at auctor laoreet. Pellentesque ultricies, sem quis porta consectetur, arcu augue pretium lectus, fringilla ullamcorper diam turpis ultricies ipsum.`,
`Vestibulum ut justo volutpat tellus dapibus feugiat sed vel nisi. Duis volutpat tortor eu sem euismod, viverra accumsan sem semper. Nullam in fringilla risus. Donec in orci tortor. Quisque a luctus leo. Pellentesque eleifend egestas libero, nec mollis arcu tempus eu. Quisque cursus massa quis augue dignissim, sit amet condimentum arcu tristique. In interdum felis non lectus gravida eleifend. Aenean id tincidunt lorem. Donec porttitor a lacus vel condimentum. Sed mi velit, accumsan id dolor sit amet, euismod imperdiet massa. Nam congue scelerisque porttitor. Mauris ut pharetra ligula. Aenean at enim hendrerit, elementum diam vitae, pretium tortor. Sed condimentum vehicula orci ac sagittis.`,
`Donec sed massa sem. Pellentesque ut euismod ligula, luctus ullamcorper nisi. Integer eleifend, risus mattis commodo feugiat, eros libero laoreet erat, quis finibus dolor sapien at enim. Donec congue, dui ac aliquam faucibus, magna risus accumsan tortor, vitae fermentum nibh libero nec lacus. Cras est mauris, convallis ut suscipit interdum, varius sit amet felis. Nunc justo leo, commodo in iaculis in, dapibus non orci. Duis sodales nisi vitae ligula dictum, non hendrerit ipsum tempor.`,
`Mauris sapien turpis, elementum sit amet orci ac, convallis ullamcorper sapien. Vestibulum nec est sodales neque euismod tincidunt ut non justo. Sed eu risus at enim pharetra congue a nec augue. Duis varius nunc a tellus eleifend dictum. Aliquam imperdiet, nibh in fermentum ullamcorper, mauris purus tristique dui, vel pellentesque dolor libero nec lorem. In ullamcorper commodo luctus. Donec nec mi ac nisl sodales ultricies eget sit amet ex. Aliquam ut libero nec arcu cursus vulputate sed quis libero. Etiam interdum aliquet faucibus. Morbi sodales condimentum dui, eget dictum metus tempor et. Fusce sodales placerat velit vel dignissim. In volutpat libero molestie ex pharetra mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras placerat ullamcorper dui sit amet molestie.`,
`Nam lorem sem, egestas sit amet neque quis, consequat sodales purus. Vestibulum ultricies, dui sed dictum volutpat, nisi ante molestie justo, faucibus tristique urna turpis facilisis ex. Suspendisse potenti. Aenean varius neque vel lectus sollicitudin rhoncus. Sed efficitur lacus vitae libero lacinia, eu egestas tortor venenatis. Maecenas convallis et ex eget aliquam. In hac habitasse platea dictumst. Nullam id commodo erat.`,
`Mauris eget fringilla dui. Aliquam accumsan velit enim, in commodo magna consectetur ac. Etiam nibh enim, condimentum sed pretium eu, cursus ac elit. Suspendisse congue mi ligula, fringilla faucibus tellus lobortis non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt, ipsum et fermentum ornare, eros velit dapibus lorem, nec cursus lectus dui et libero. In hac habitasse platea dictumst.`,
]

const form = document.querySelector(".lorem-form")
const amount = document.getElementById("amount")
const result = document.querySelector(".lorem-text")

form.addEventListener("submit", function (e){
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length);

    //empty
    // -1
    // > 9

    if(isNaN(value) || value <= 0 || value > 9) {
        result.innerHTML = `<p class="result">${text[random]}</p>`
    }
    else{
        let tempText = text.slice(0,value);
        tempText = tempText.map(function (item) {
            return `<p class="result">${item}</p>`
        })
        .join("");
        result.innerHTML = tempText;
    }
})
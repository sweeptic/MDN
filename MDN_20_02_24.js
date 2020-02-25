$(document).ready(function () {




    function chunkArrayInGroups(arr, size) {

        let ret = [];

        for (let index = 0; index < arr.length;) {
            // console.log(arr[index]);
            ret.push(arr.slice(index, index + size))
            index = index + size;
        }

        console.log(ret);

        // Break it up.
        return ret;
    }

    chunkArrayInGroups(["a", "b", "c", "d"], 2)

})
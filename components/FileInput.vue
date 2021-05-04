<template>
    <div>
        <label for="file-upload">
            Upload File
            <input
                id="file-upload"
                type="file"
                :name="name"
                @change="onChange"
            />
        </label>
        <div class="file-box">
            <span
                v-for="(file, index) in files"
                :key="file.name"
                class="file-box__item"
            >
                <i class="fal fa-file file-box__file-icon"></i>
                {{ file.name }}
                <span v-if="index !== files.length - 1">,</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FileInput',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            files: []
        }
    },
    methods: {
        onChange(event) {
            console.log(event)
            const { target } = event
            const { files, name } = target
            console.log(files, name)
            const list = []
            Object.values(files).forEach((file) => {
                console.log('in object values', file)
                list.push({ name: file.name, file, type: file.type })
            })
            this.files = list
        }
    }
}
</script>

<style lang="scss" scoped>
label {
    border: 1px solid $color-primary;
    background: transparent;
    display: grid;
    place-items: center;
    height: base(2);
    font-size: base(0.9);
    cursor: pointer;
    width: 100%;
}
input[type='file'] {
    opacity: 0;
    position: absolute;
    width: 1px;
    height: 1px;
    top: 0;
    left: 0;
}

.file-box {
    margin-top: base();
    max-width: 100%;
    overflow-x: auto;

    &__item:not(:first-child) {
        margin-left: base(0.5);
    }

    &__icon {
        margin-right: base(0.25);
    }
}
</style>

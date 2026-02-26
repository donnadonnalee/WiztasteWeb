/**
 * AUDIO MANAGER
 */
class AudioManager {
    constructor() {
        this.sounds = {};
        this.bgmAudio = null;
        this.isMuted = false;
        this.isAudioUnlocked = false;

        this.loadSound('bgm_intro', 'assets/bgm_intro.mp3', true);
        this.loadSound('bgm_explore', 'assets/bgm_explore.mp3', true);
        this.loadSound('bgm_battle', 'assets/bgm_battle.mp3', true);
        this.loadSound('bgm_boss', 'assets/bgm_boss.mp3', true);

        this.loadSound('se_attack', 'assets/se_attack.mp3', false);
        this.loadSound('se_magic', 'assets/se_magic.mp3', false);
        this.loadSound('se_damage', 'assets/se_damage.mp3', false);
        this.loadSound('se_dead', 'assets/se_dead.mp3', false);
        this.loadSound('se_victory', 'assets/se_victory.mp3', false);
    }

    loadSound(name, url, isBgm) {
        const audio = new Audio(url);
        if (isBgm) audio.loop = true;
        this.sounds[name] = audio;
    }

    unlockAudio() {
        if (this.isAudioUnlocked) return;
        Object.values(this.sounds).forEach(audio => {
            audio.load();
        });
        this.isAudioUnlocked = true;
    }

    playSE(name, vol = 1.0) {
        if (this.isMuted || !this.sounds[name]) return;
        try {
            const se = this.sounds[name].cloneNode();
            se.volume = vol;
            se.play().catch(e => { });
        } catch (e) { }
    }

    playBGM(name, vol = 0.5) {
        if (this.isMuted) return;
        this.stopBGM();
        if (!this.sounds[name]) return;

        try {
            const bgm = this.sounds[name];
            bgm.volume = vol;
            bgm.currentTime = 0;
            bgm.play().catch(e => {
                console.warn(`Could not play ${name}:`, e);
            });
            this.bgmAudio = bgm;
        } catch (e) { }
    }

    stopBGM() {
        if (this.bgmAudio) {
            this.bgmAudio.pause();
            this.bgmAudio.currentTime = 0;
            this.bgmAudio = null;
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        const btn = document.getElementById('btn-mute');
        if (btn) {
            btn.textContent = this.isMuted ? '🔇' : '🔊';
        }

        if (this.isMuted) {
            if (this.bgmAudio) {
                this.bgmAudio.pause();
            }
        } else {
            if (this.bgmAudio) {
                this.bgmAudio.play().catch(e => { });
            }
        }
    }
}

const audio = new AudioManager();

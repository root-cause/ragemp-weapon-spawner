mp.events.add("weaponSpawner:give", (player, weaponName) => {
    player.giveWeapon(mp.joaat(weaponName), 9999);
});

mp.events.add("weaponSpawner:updateComponent", (player, weaponName, componentName, remove) => {
    if (remove) {
        player.removeWeaponComponent(mp.joaat(weaponName), mp.joaat(componentName));
    } else {
        player.giveWeaponComponent(mp.joaat(weaponName), mp.joaat(componentName));
    }

    player.call("weaponSpawner:componentsUpdated", [weaponName]);
});

mp.events.add("weaponSpawner:updateTint", (player, weaponName, tintIdx) => {
    player.setWeaponTint(mp.joaat(weaponName), Number(tintIdx) || 0);
});

mp.events.add("weaponSpawner:remove", (player, weaponName) => {
    player.removeWeapon(mp.joaat(weaponName));
});
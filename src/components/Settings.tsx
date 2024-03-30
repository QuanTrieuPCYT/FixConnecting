import {FormSwitch, FormRow, FormSection, View, ScrollView, Image, Text} from 'enmity/components'
import {Constants, Navigation, React, StyleSheet} from 'enmity/metro/common'
import {Toasts, Linking} from "enmity/metro/common"
// @ts-ignore
import {name, version} from '../../manifest.json'
import {getIDByName} from "enmity/api/assets"
import {getByProps} from "enmity/modules"
import {isIconBold} from "../fuck.tsx"

const GitHubIcon = getIDByName('img_account_sync_github_white')
const DiscordIcon = getIDByName('Discord')
const TwitterIcon = getIDByName('img_account_sync_twitter_white')
const ToastIcon = getIDByName('ForumIcon')
const Invites = getByProps('acceptInviteAndTransitionToInviteChannel')
const TickIcon = getIDByName('ic_checked')

export default ({settings}) => {
    const styles = StyleSheet.createThemedStyleSheet({
        container: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        },
        image: {
            width: 70,
            height: 70,
            marginTop: 20,
            marginLeft: 20,
            borderRadius: 10,
        },
        title: {
            flexDirection: "column",
        },
        name: {
            fontSize: 30,
            paddingTop: 20,
            paddingLeft: 20,
            paddingRight: 30,
            color: Constants.ThemeColorMap.HEADER_PRIMARY,
            fontFamily: Constants.Fonts.DISPLAY_BOLD,
        },
        author: {
            fontSize: 15,
            paddingLeft: 20,
            color: Constants.ThemeColorMap.HEADER_SECONDARY,
        },
        info: {
            height: 45,
            paddingTop: 3,
            paddingBottom: 3,
            justifyContent: "center",
            alignItems: "center"
        },
        footer: {
            color: Constants.ThemeColorMap.HEADER_SECONDARY,
            textAlign: 'center',
            paddingTop: 10,
            paddingBottom: 20
        }
    })
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={{uri: 'https://cdn.discordapp.com/avatars/699512154004652093/eb60849c35d6e584daf94f8be39cc012.png'}}
                    style={styles.image}
                />
                <View style={styles.title}>
                    <Text style={styles.name}>FixConnecting</Text>
                    <Text style={styles.author}>by mafu, modified by QuanTrieuPCYT</Text>
                </View>
            </View>
            <FormSection title="OPTIONS">
                <FormRow
                    label="Initialization Toast"
                    leading={<FormRow.Icon source={ToastIcon}/>}
                    trailing={
                        <FormSwitch
                            value={settings.getBoolean("initialization_toast", false)}
                            onValueChange={() => {
                                settings.toggle("initialization_toast", false)
                            }}
                        />
                    }
                />  
                <FormRow
                    label="Bold Toast Icon"
                    leading={<FormRow.Icon source={TickIcon}/>}
                    trailing={
                        <FormSwitch
                            value={settings.getBoolean("bold_toast_icon", false)}
                            onValueChange={() => {
                                settings.toggle("bold_toast_icon", false)
                            }}
                        />
                    }
                />  
            </FormSection>
            <FormSection title="INFORMATION">
                <FormRow
                    label="Follow me on Twitter"
                    style={styles.info}
                    trailing={FormRow.Arrow}
                    leading={<FormRow.Icon source={TwitterIcon}/>}
                    onPress={() => {
                        Linking.openURL("https://twitter.com/qtpctechhxd")
                    }}
                />
                <FormRow
                    label="Visit my server for help"
                    style={styles.info}
                    trailing={FormRow.Arrow}
                    leading={<FormRow.Icon source={DiscordIcon}/>}
                    onPress={() => {
                        Invites.acceptInviteAndTransitionToInviteChannel({
                            inviteKey: 'sJ9NQprExv',
                            context: {location: 'Invite Button Embed'},
                            callback: () => {Navigation.pop()}
                        })
                    }}
                />
                <FormRow
                    label="Check Source on GitHub"
                    style={styles.info}
                    trailing={FormRow.Arrow}
                    leading={<FormRow.Icon source={GitHubIcon}/>}
                    onPress={() => {
                        Linking.openURL("https://github.com/QuanTrieuPCYT/FixConnecting")
                    }}
                />
            </FormSection>
            <Text style={styles.footer}>
                {`v${version}`}
            </Text>
        </ScrollView>
    )
};
